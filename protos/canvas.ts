// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.1
//   protoc               v4.23.4
// source: canvas.proto

/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "com.spotify.canvazcache";

export enum Type {
  IMAGE = 0,
  VIDEO = 1,
  VIDEO_LOOPING = 2,
  VIDEO_LOOPING_RANDOM = 3,
  GIF = 4,
  UNRECOGNIZED = -1,
}

export function typeFromJSON(object: any): Type {
  switch (object) {
    case 0:
    case "IMAGE":
      return Type.IMAGE;
    case 1:
    case "VIDEO":
      return Type.VIDEO;
    case 2:
    case "VIDEO_LOOPING":
      return Type.VIDEO_LOOPING;
    case 3:
    case "VIDEO_LOOPING_RANDOM":
      return Type.VIDEO_LOOPING_RANDOM;
    case 4:
    case "GIF":
      return Type.GIF;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Type.UNRECOGNIZED;
  }
}

export function typeToJSON(object: Type): string {
  switch (object) {
    case Type.IMAGE:
      return "IMAGE";
    case Type.VIDEO:
      return "VIDEO";
    case Type.VIDEO_LOOPING:
      return "VIDEO_LOOPING";
    case Type.VIDEO_LOOPING_RANDOM:
      return "VIDEO_LOOPING_RANDOM";
    case Type.GIF:
      return "GIF";
    case Type.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Artist {
  uri: string;
  name: string;
  avatar: string;
}

export interface EntityCanvazResponse {
  canvases: EntityCanvazResponse_Canvaz[];
  ttlInSeconds: number;
}

export interface EntityCanvazResponse_Canvaz {
  id: string;
  url: string;
  fileId: string;
  type: Type;
  entityUri: string;
  artist: Artist | undefined;
  explicit: boolean;
  uploadedBy: string;
  etag: string;
  canvasUri: string;
}

export interface EntityCanvazRequest {
  entities: EntityCanvazRequest_Entity[];
}

export interface EntityCanvazRequest_Entity {
  entityUri: string;
  etag: string;
}

function createBaseArtist(): Artist {
  return { uri: "", name: "", avatar: "" };
}

export const Artist = {
  encode(message: Artist, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uri !== "") {
      writer.uint32(10).string(message.uri);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.avatar !== "") {
      writer.uint32(26).string(message.avatar);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Artist {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArtist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uri = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.avatar = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Artist {
    return {
      uri: isSet(object.uri) ? globalThis.String(object.uri) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      avatar: isSet(object.avatar) ? globalThis.String(object.avatar) : "",
    };
  },

  toJSON(message: Artist): unknown {
    const obj: any = {};
    if (message.uri !== "") {
      obj.uri = message.uri;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.avatar !== "") {
      obj.avatar = message.avatar;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Artist>, I>>(base?: I): Artist {
    return Artist.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Artist>, I>>(object: I): Artist {
    const message = createBaseArtist();
    message.uri = object.uri ?? "";
    message.name = object.name ?? "";
    message.avatar = object.avatar ?? "";
    return message;
  },
};

function createBaseEntityCanvazResponse(): EntityCanvazResponse {
  return { canvases: [], ttlInSeconds: 0 };
}

export const EntityCanvazResponse = {
  encode(message: EntityCanvazResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.canvases) {
      EntityCanvazResponse_Canvaz.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.ttlInSeconds !== 0) {
      writer.uint32(16).int64(message.ttlInSeconds);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EntityCanvazResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityCanvazResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.canvases.push(EntityCanvazResponse_Canvaz.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.ttlInSeconds = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EntityCanvazResponse {
    return {
      canvases: globalThis.Array.isArray(object?.canvases)
        ? object.canvases.map((e: any) => EntityCanvazResponse_Canvaz.fromJSON(e))
        : [],
      ttlInSeconds: isSet(object.ttlInSeconds) ? globalThis.Number(object.ttlInSeconds) : 0,
    };
  },

  toJSON(message: EntityCanvazResponse): unknown {
    const obj: any = {};
    if (message.canvases?.length) {
      obj.canvases = message.canvases.map((e) => EntityCanvazResponse_Canvaz.toJSON(e));
    }
    if (message.ttlInSeconds !== 0) {
      obj.ttlInSeconds = Math.round(message.ttlInSeconds);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EntityCanvazResponse>, I>>(base?: I): EntityCanvazResponse {
    return EntityCanvazResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EntityCanvazResponse>, I>>(object: I): EntityCanvazResponse {
    const message = createBaseEntityCanvazResponse();
    message.canvases = object.canvases?.map((e) => EntityCanvazResponse_Canvaz.fromPartial(e)) || [];
    message.ttlInSeconds = object.ttlInSeconds ?? 0;
    return message;
  },
};

function createBaseEntityCanvazResponse_Canvaz(): EntityCanvazResponse_Canvaz {
  return {
    id: "",
    url: "",
    fileId: "",
    type: 0,
    entityUri: "",
    artist: undefined,
    explicit: false,
    uploadedBy: "",
    etag: "",
    canvasUri: "",
  };
}

export const EntityCanvazResponse_Canvaz = {
  encode(message: EntityCanvazResponse_Canvaz, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    if (message.fileId !== "") {
      writer.uint32(26).string(message.fileId);
    }
    if (message.type !== 0) {
      writer.uint32(32).int32(message.type);
    }
    if (message.entityUri !== "") {
      writer.uint32(42).string(message.entityUri);
    }
    if (message.artist !== undefined) {
      Artist.encode(message.artist, writer.uint32(50).fork()).ldelim();
    }
    if (message.explicit !== false) {
      writer.uint32(56).bool(message.explicit);
    }
    if (message.uploadedBy !== "") {
      writer.uint32(66).string(message.uploadedBy);
    }
    if (message.etag !== "") {
      writer.uint32(74).string(message.etag);
    }
    if (message.canvasUri !== "") {
      writer.uint32(90).string(message.canvasUri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EntityCanvazResponse_Canvaz {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityCanvazResponse_Canvaz();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.url = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.fileId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.entityUri = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.artist = Artist.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.explicit = reader.bool();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.uploadedBy = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.etag = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.canvasUri = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EntityCanvazResponse_Canvaz {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      url: isSet(object.url) ? globalThis.String(object.url) : "",
      fileId: isSet(object.fileId) ? globalThis.String(object.fileId) : "",
      type: isSet(object.type) ? typeFromJSON(object.type) : 0,
      entityUri: isSet(object.entityUri) ? globalThis.String(object.entityUri) : "",
      artist: isSet(object.artist) ? Artist.fromJSON(object.artist) : undefined,
      explicit: isSet(object.explicit) ? globalThis.Boolean(object.explicit) : false,
      uploadedBy: isSet(object.uploadedBy) ? globalThis.String(object.uploadedBy) : "",
      etag: isSet(object.etag) ? globalThis.String(object.etag) : "",
      canvasUri: isSet(object.canvasUri) ? globalThis.String(object.canvasUri) : "",
    };
  },

  toJSON(message: EntityCanvazResponse_Canvaz): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.url !== "") {
      obj.url = message.url;
    }
    if (message.fileId !== "") {
      obj.fileId = message.fileId;
    }
    if (message.type !== 0) {
      obj.type = typeToJSON(message.type);
    }
    if (message.entityUri !== "") {
      obj.entityUri = message.entityUri;
    }
    if (message.artist !== undefined) {
      obj.artist = Artist.toJSON(message.artist);
    }
    if (message.explicit !== false) {
      obj.explicit = message.explicit;
    }
    if (message.uploadedBy !== "") {
      obj.uploadedBy = message.uploadedBy;
    }
    if (message.etag !== "") {
      obj.etag = message.etag;
    }
    if (message.canvasUri !== "") {
      obj.canvasUri = message.canvasUri;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EntityCanvazResponse_Canvaz>, I>>(base?: I): EntityCanvazResponse_Canvaz {
    return EntityCanvazResponse_Canvaz.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EntityCanvazResponse_Canvaz>, I>>(object: I): EntityCanvazResponse_Canvaz {
    const message = createBaseEntityCanvazResponse_Canvaz();
    message.id = object.id ?? "";
    message.url = object.url ?? "";
    message.fileId = object.fileId ?? "";
    message.type = object.type ?? 0;
    message.entityUri = object.entityUri ?? "";
    message.artist = (object.artist !== undefined && object.artist !== null)
      ? Artist.fromPartial(object.artist)
      : undefined;
    message.explicit = object.explicit ?? false;
    message.uploadedBy = object.uploadedBy ?? "";
    message.etag = object.etag ?? "";
    message.canvasUri = object.canvasUri ?? "";
    return message;
  },
};

function createBaseEntityCanvazRequest(): EntityCanvazRequest {
  return { entities: [] };
}

export const EntityCanvazRequest = {
  encode(message: EntityCanvazRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.entities) {
      EntityCanvazRequest_Entity.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EntityCanvazRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityCanvazRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entities.push(EntityCanvazRequest_Entity.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EntityCanvazRequest {
    return {
      entities: globalThis.Array.isArray(object?.entities)
        ? object.entities.map((e: any) => EntityCanvazRequest_Entity.fromJSON(e))
        : [],
    };
  },

  toJSON(message: EntityCanvazRequest): unknown {
    const obj: any = {};
    if (message.entities?.length) {
      obj.entities = message.entities.map((e) => EntityCanvazRequest_Entity.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EntityCanvazRequest>, I>>(base?: I): EntityCanvazRequest {
    return EntityCanvazRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EntityCanvazRequest>, I>>(object: I): EntityCanvazRequest {
    const message = createBaseEntityCanvazRequest();
    message.entities = object.entities?.map((e) => EntityCanvazRequest_Entity.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEntityCanvazRequest_Entity(): EntityCanvazRequest_Entity {
  return { entityUri: "", etag: "" };
}

export const EntityCanvazRequest_Entity = {
  encode(message: EntityCanvazRequest_Entity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entityUri !== "") {
      writer.uint32(10).string(message.entityUri);
    }
    if (message.etag !== "") {
      writer.uint32(18).string(message.etag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EntityCanvazRequest_Entity {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntityCanvazRequest_Entity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entityUri = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.etag = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EntityCanvazRequest_Entity {
    return {
      entityUri: isSet(object.entityUri) ? globalThis.String(object.entityUri) : "",
      etag: isSet(object.etag) ? globalThis.String(object.etag) : "",
    };
  },

  toJSON(message: EntityCanvazRequest_Entity): unknown {
    const obj: any = {};
    if (message.entityUri !== "") {
      obj.entityUri = message.entityUri;
    }
    if (message.etag !== "") {
      obj.etag = message.etag;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<EntityCanvazRequest_Entity>, I>>(base?: I): EntityCanvazRequest_Entity {
    return EntityCanvazRequest_Entity.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<EntityCanvazRequest_Entity>, I>>(object: I): EntityCanvazRequest_Entity {
    const message = createBaseEntityCanvazRequest_Entity();
    message.entityUri = object.entityUri ?? "";
    message.etag = object.etag ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  if (long.lt(globalThis.Number.MIN_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}