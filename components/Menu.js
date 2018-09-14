import * as Pages from './Pages';

export default function Menu(state){
    return `
    ${Pages[state.body]}
    `;
}