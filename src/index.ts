import { EntityCanvazRequest, EntityCanvazResponse } from "../protos/canvas";

interface TokenResponse {
    clientId: string
    accessToken: string
    accessTokenExpirationTimestampMs?: number
    isAnonymous?: boolean
}

/** Canvas list for track */
export interface CanvasResponse {
    canvases: Canvas[]
    ttlInSeconds?: number
}

/** Canvas object */
export interface Canvas {
    id: string
    url: string
    fileId?: string
    type: "IMAGE" | "VIDEO" | "VIDEO_LOOPING" | "VIDEO_LOOPING_RANDOM" | "GIF"
    entityUri: string
    artist: {
        uri: string
        name: string
        avatar: string
    }
    explicit?: boolean
    uploadedBy: string
    etag: string
    canvas_uri: string
}

/**
 * Getting token to work with Spotify API
 */
export const get_access_token = async (): Promise<string> => {
    let response: Response = await fetch(`https://open.spotify.com/get_access_token?reason=transport`)
    let data: TokenResponse = await response.json()
    return data.accessToken
}

/**
 * Getting a Canvas for a track
 * @param track_id Track ID
 * @param access_token Not necessarily. Token for working with Spotify API
 */
export const get_canvas_for_track = async (track_id: string, access_token?: string): Promise<CanvasResponse> => {
    if(!access_token) access_token = await get_access_token();
    let canvas_req: EntityCanvazRequest = EntityCanvazRequest.create({
        entities: [{
            entityUri: `spotify:track:${track_id}`
        }]
    })
    
    let response: Response = await fetch(`https://gew1-spclient.spotify.com/canvaz-cache/v0/canvases`, {
        headers: {
            "Authorization": `Bearer ${access_token}`,
            "Content-Type": "application/x-protobuf"
        },
        method: "POST",
        body: EntityCanvazRequest.encode(canvas_req).finish()
    })
    if(response.ok) {
        let result: ArrayBuffer = await response.arrayBuffer()
        return EntityCanvazResponse.toJSON(EntityCanvazResponse.decode(new Uint8Array(result))) as CanvasResponse
    }
    else {
        throw new Error("API request failed")
    }
}