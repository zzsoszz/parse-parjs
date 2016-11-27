/**
 * Created by lifeg on 19/11/2016.
 */
interface StaticCombinators {
    /**
     * P tries the given parsers, one after the other, and returns the value of the first one that succeeds.
     * @param pars The parsers.
     */
    any(...pars : LoudParser<any>[]) : LoudParser<any>;

    /**
     * P applies the specified parsers in sequence and returns the results in an array.
     * @param parsers The parser sequence.
     */
    seq(...parsers : AnyParser[]) : LoudParser<any[]>;

    /**
     * P applies the specified parsers in sequence and returns the results in an array.
     * @param parsers The parser sequence.
     */
    seq<T>(...parsers : (QuietParser | LoudParser<T>)[]) : LoudParser<T[]>;

    /**
     * P applies the specified name-parser pairs and returns a JavaScript object containing the results.
     * @param parsers The parsers to apply.
     */
    seq<T>(...parsers : [string, AnyParser][] ): LoudParser<any>;
}
