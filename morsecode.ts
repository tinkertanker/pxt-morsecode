/**
 * Provides access to a morse code abstraction.
 */
//% color=#000080 icon="\uf086" block="Morse Code"
namespace morseCode {
  export enum MorseSignal {
    //% block="•"
    Dot,
    //% block="━"
    Dash,
  }

  //% fixedInstances
  export class MorseCharacter {
    protected _signals: MorseSignal[];

    constructor(signals: MorseSignal[]) {
      this._signals = signals;
    }

    /**
     * Set a character's signal array.
     * @param signals new signal array; eg: [MorseSignal.Dot]
     */
    //% color=#1e90ff block="set character %character to %signals"
    public set(signals: MorseSignal[]): void {
      this._signals = signals;
    }

    /**
     * Get a character's signal array.
     */
    //% color=#1e90ff block="character %c"
    public get(): MorseSignal[] {
      return this._signals;
    }
  }

  /**
   * Represents a signal block
   */
  //% color=#7851a9 block="%key"
  export function _signal(signal: MorseSignal): MorseSignal {
    return signal;
  }

  let _words: { [k: string]: MorseSignal[][] } = {};

  /**
   * Creates a new word with a character array.
   * @param wordName the name of the word; eg: "morse"
   * @param characters new character array; eg: [MorseCharacter.A]
   */
  //% color=#006400 block="set word %wordName to %signals"
  export function setWord(wordName: string, characters: MorseSignal[][]): void {
    _words[wordName] = characters;
  }

  /**
   * Get a word's character array.
   */
  //% color=#006400 block="word %wordName"
  export function getWord(wordName: string): MorseSignal[][] {
    return _words[wordName];
  }

  const _characters: { [k: string]: MorseSignal[] } = {
    A: [MorseSignal.Dot, MorseSignal.Dash],
    B: [MorseSignal.Dash, MorseSignal.Dot, MorseSignal.Dot, MorseSignal.Dot],
    C: [MorseSignal.Dash, MorseSignal.Dot, MorseSignal.Dash, MorseSignal.Dot],
    D: [MorseSignal.Dash, MorseSignal.Dot, MorseSignal.Dot],
    E: [MorseSignal.Dot],
    F: [MorseSignal.Dot, MorseSignal.Dot, MorseSignal.Dash, MorseSignal.Dot],
    G: [MorseSignal.Dash, MorseSignal.Dash, MorseSignal.Dot],
    H: [MorseSignal.Dot, MorseSignal.Dot, MorseSignal.Dot, MorseSignal.Dot],
    I: [MorseSignal.Dot, MorseSignal.Dot],
    J: [MorseSignal.Dot, MorseSignal.Dash, MorseSignal.Dash, MorseSignal.Dash],
    K: [MorseSignal.Dash, MorseSignal.Dot, MorseSignal.Dash],
    L: [MorseSignal.Dot, MorseSignal.Dash, MorseSignal.Dot, MorseSignal.Dot],
    M: [MorseSignal.Dash, MorseSignal.Dash],
    N: [MorseSignal.Dash, MorseSignal.Dot],
    O: [MorseSignal.Dash, MorseSignal.Dash, MorseSignal.Dash],
    P: [MorseSignal.Dot, MorseSignal.Dash, MorseSignal.Dash, MorseSignal.Dot],
    Q: [MorseSignal.Dash, MorseSignal.Dash, MorseSignal.Dot, MorseSignal.Dash],
    R: [MorseSignal.Dot, MorseSignal.Dash, MorseSignal.Dot],
    S: [MorseSignal.Dot, MorseSignal.Dot, MorseSignal.Dot],
    T: [MorseSignal.Dash],
    U: [MorseSignal.Dot, MorseSignal.Dot, MorseSignal.Dash],
    V: [MorseSignal.Dot, MorseSignal.Dot, MorseSignal.Dot, MorseSignal.Dash],
    W: [MorseSignal.Dot, MorseSignal.Dash, MorseSignal.Dash],
    X: [MorseSignal.Dash, MorseSignal.Dot, MorseSignal.Dot, MorseSignal.Dash],
    Y: [MorseSignal.Dash, MorseSignal.Dot, MorseSignal.Dash, MorseSignal.Dash],
    Z: [MorseSignal.Dash, MorseSignal.Dash, MorseSignal.Dot, MorseSignal.Dot],
  };

  //% fixedInstance
  export let A: MorseCharacter = new MorseCharacter(_characters.A);
  //% fixedInstance
  export let B: MorseCharacter = new MorseCharacter(_characters.B);
  //% fixedInstance
  export let C: MorseCharacter = new MorseCharacter(_characters.C);
  //% fixedInstance
  export let D: MorseCharacter = new MorseCharacter(_characters.D);
  //% fixedInstance
  export let E: MorseCharacter = new MorseCharacter(_characters.E);
  //% fixedInstance
  export let F: MorseCharacter = new MorseCharacter(_characters.F);
  //% fixedInstance
  export let G: MorseCharacter = new MorseCharacter(_characters.G);
  //% fixedInstance
  export let H: MorseCharacter = new MorseCharacter(_characters.H);
  //% fixedInstance
  export let I: MorseCharacter = new MorseCharacter(_characters.I);
  //% fixedInstance
  export let J: MorseCharacter = new MorseCharacter(_characters.J);
  //% fixedInstance
  export let K: MorseCharacter = new MorseCharacter(_characters.K);
  //% fixedInstance
  export let L: MorseCharacter = new MorseCharacter(_characters.L);
  //% fixedInstance
  export let M: MorseCharacter = new MorseCharacter(_characters.M);
  //% fixedInstance
  export let N: MorseCharacter = new MorseCharacter(_characters.N);
  //% fixedInstance
  export let O: MorseCharacter = new MorseCharacter(_characters.O);
  //% fixedInstance
  export let P: MorseCharacter = new MorseCharacter(_characters.P);
  //% fixedInstance
  export let Q: MorseCharacter = new MorseCharacter(_characters.Q);
  //% fixedInstance
  export let R: MorseCharacter = new MorseCharacter(_characters.R);
  //% fixedInstance
  export let S: MorseCharacter = new MorseCharacter(_characters.S);
  //% fixedInstance
  export let T: MorseCharacter = new MorseCharacter(_characters.T);
  //% fixedInstance
  export let U: MorseCharacter = new MorseCharacter(_characters.U);
  //% fixedInstance
  export let V: MorseCharacter = new MorseCharacter(_characters.V);
  //% fixedInstance
  export let W: MorseCharacter = new MorseCharacter(_characters.W);
  //% fixedInstance
  export let X: MorseCharacter = new MorseCharacter(_characters.X);
  //% fixedInstance
  export let Y: MorseCharacter = new MorseCharacter(_characters.Y);
  //% fixedInstance
  export let Z: MorseCharacter = new MorseCharacter(_characters.Z);
}
