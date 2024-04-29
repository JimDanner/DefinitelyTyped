/// <reference types="node" />
/** Declaration file generated by dts-gen */

import stream = require("stream");
import { EventEmitter } from "events";

type ProbableAsSrc = string[] | string | Buffer;

// eslint-disable-next-line @typescript-eslint/ban-types
type FontminPlugin = Function | stream.Transform;

interface PluginCloneOption {
    clone?: boolean;
}

interface PluginHintOption {
    hinting?: boolean;
}

interface PluginFromSVGOption extends PluginHintOption {
    fontName?: string;
    adjust?: {
        leftSidebearing: number;
        rightSidebearing: number;
        ajdustToEmBox: boolean;
        ajdustToEmPadding: number;
    };
    name?: {
        fontFamily?: string;
        fontSubFamily?: string;
        uniqueSubFamily?: string;
        postScriptName?: string;
    };
}

interface FontInfo {
    fontFile: string;
    fontPath: string;
    base64: boolean;
    glyph: boolean;
    iconPrefix: string;
    local: boolean;
}

interface CssOption {
    glyph?: boolean;
    base64?: boolean;
    iconPrefix?: string;
    fontFamily?: string | ((fontinfo: FontInfo, ttf: any) => string);
    filename?: string;
    fontPath?: string;
    asFileName?: boolean;
    local?: boolean;
}

interface GlyphOption {
    text?: string;
    basicText?: boolean;
    hinting?: boolean;
    use?: FontminPlugin;
}

declare class Fontmin<SrcType extends ProbableAsSrc> extends EventEmitter {
    constructor();

    dest(): string;

    dest(dir: string): Fontmin<SrcType>;

    run(cb: (err: Error, files: Array<{ _contents: stream.Readable }>, stream: any) => void): any;

    src(): SrcType;

    src<T extends ProbableAsSrc>(file: T): Fontmin<T>;

    use(plugin: FontminPlugin): Fontmin<SrcType>;

    static css(opts: CssOption): stream.Transform;

    static glyph(opts: GlyphOption): stream.Transform;

    static mime: {
        ".*": string;
        eot: string;
        otf: string;
        svg: string;
        svgz: string;
        ttf: string;
        woff: string;
        woff2: string;
    };

    static otf2ttf(opts?: PluginCloneOption & PluginHintOption): stream.Transform;

    static plugins: string[];

    static svg2ttf(opts?: PluginCloneOption & PluginHintOption): stream.Transform;

    static svgs2ttf(file: string, opts?: PluginFromSVGOption): stream.Transform;

    static ttf2eot(opts?: PluginCloneOption): stream.Transform;

    static ttf2svg(opts?: PluginCloneOption): stream.Transform;

    static ttf2woff(opts?: PluginCloneOption): stream.Transform;

    static ttf2woff2(opts?: PluginCloneOption): stream.Transform;
}

export = Fontmin;
