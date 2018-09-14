export default function Post(post){
    return `
    <div>
        <h1>${post.title}</h1>
        <h1>${post.body}</h1>
        <h3>${post.title}</h3>
    </div>
    `;
}