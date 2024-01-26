import {toValue} from "vue";

export function useLink(url) {
    const link = toValue(url)
    if(link) window.open(link, '_blank')
    else return
}