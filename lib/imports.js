import { Tape } from "./tape.js"
import { TapePlayer } from "./player.js"
import { TapeContain } from "./container.js"
import { Display } from "./displayer.js"

export class imports{
    player = new TapePlayer()
    tape = new Tape()
    container = new TapeContain()
}