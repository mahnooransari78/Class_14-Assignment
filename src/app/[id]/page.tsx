interface Props {
    params: {
      id: string;
    };
  }
interface Post {
    id :number ;
    title: string;
    body?: string; 
  }

const Dynamicpost = async (props: Props) =>{
    const url = await fetch(`https://jsonplaceholder.typicode.com/albums/${props.params.id}`)
    const res :Post = await url.json();
    console.log('singlepost',res);

    return(
       <h1>
        {props.params.id} <br />
        {res.title} <br />
        {res.body}
       </h1>
    )
}

export default  Dynamicpost;