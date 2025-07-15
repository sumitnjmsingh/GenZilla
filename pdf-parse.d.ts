declare module 'pdf-parse/lib/pdf-parse.js' {
  import { PDFParseOptions, PDFParseResult } from 'pdf-parse';

  type PdfParseFunction = (dataBuffer: Buffer | Uint8Array, options?: PDFParseOptions) => Promise<PDFParseResult>;

  const content: PdfParseFunction;
  export default content;
}
