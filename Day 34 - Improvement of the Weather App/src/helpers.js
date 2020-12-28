import { computed } from "vue";
import { useStore } from "vuex";

export function useState(arr) {
  const store = useStore();
  const keypair = arr.map(s => [s, computed(() => store.state[s])]);
  return Object.fromEntries(keypair);
}
