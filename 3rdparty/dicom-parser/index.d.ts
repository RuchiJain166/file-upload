declare module 'dicom-parser' {
 
    export type ByteArray = Uint8Array | Buffer;
  
    export interface DataSet {
      byteArray: ByteArray;
      byteArrayParser : ByteArrayParser;
      elements:{ [key: string]: number | undefined };
      warnings: string[];
  
      uint16 (tag: string, index: number) : number;
      int16 (tag: string, index: number) : number;
      uint32 (tag: string, index: number) : number;
      int32 (tag: string, index: number) : number;
      float (tag: string, index: number) : number;
      double (tag: string, index: number) : number;
      numStringValues (tag: string) : number;
      string (tag: string, index: number) : string;
      text (tag: string, index: number) : string;
      floatString (tag: string, index: number) : number;
      intString (tag: string, index: number) : number;
      attributeTag (tag: string) : string;
    }
  
    export interface ByteStream {
      byteArray: ByteArray;
      byteArrayParser: ByteArrayParser;
      position: number;
      warnings: string[];
    }
  
    export interface ByteArrayParser {
      readUint16(byteArray: ByteArray, position: number): number;
      readInt16(byteArray: ByteArray, position: number): number;
      readUint32(byteArray: ByteArray, position: number): number;
      readInt32(byteArray: ByteArray, position: number): number;
      readFloat(byteArray: ByteArray, position: number): number;
      readDouble(byteArray: ByteArray, position: number): number;
    }
  
    export function parseDicom(arr: Uint8Array, option ?: any) : DataSet;
   
  }