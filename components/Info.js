import * as Pages from './Pages';

export default function Info(state){
    return `
    ${Pages[state.body]}
            `;
}