import xs, { Stream, Listener, Producer } from "xstream";
const { watch } = require("mutant");

function xsFromMutant<T>(mutantStream: any): Stream<T> {
  const producer: Producer<T> & { remove?: () => {} } = {
    start(listener: Listener<T>): void {
      this.remove = watch(mutantStream, (value: T) => {
        listener.next(value);
      });
    },
    stop(): void {
      if (this.remove) {
        this.remove();
      }
    }
  };
  return xs.create(producer);
}

export default xsFromMutant;
