import { notify as baseNotify } from "@kyvg/vue3-notification";

export function notify(title, text, option) {
  return baseNotify({ title, text, ...option });
}

export function successNotify(title, text, option) {
  return notify(title, text, { ...option, type: "success" });
}

export function warningNotify(title, text, option) {
  return notify(title, text, { ...option, type: "warn" });
}

export function errorNotify(title, text, option) {
  return notify(title, text, { ...option, type: "error" });
}
