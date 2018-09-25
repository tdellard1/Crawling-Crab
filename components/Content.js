import * as Pages from './Pages';

export default function Content(state){
    const page = state[state.active];

    return `
    ${Pages[page.body](state)}
    `;
}


// line 7 = ${Pages[page.body](state.posts)}