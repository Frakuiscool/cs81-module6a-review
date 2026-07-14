Hardest part to understand:
skipSong() — it's easy to misread. It doesn't just move to the next song; it actually deletes the first song from the array, then treats whatever's left at index 0 as the new current song.
How this ties data and behavior together:
Methods on Playlist.prototype are shared by every playlist, but this makes each call use its own data. myMix.addSong(...) runs the same function as any other playlist would, but this points to myMix, so it's myMix.songs that gets updated, not some other playlist's.
What I'd do differently:
Return true/false from methods like skipSong() instead of just logging, so the caller can react to failures.
Use a currentIndex instead of deleting songs on skip — right now skipping permanently removes the song, so you can never go back.
Add basic validation, like rejecting empty or duplicate song titles in addSong.
