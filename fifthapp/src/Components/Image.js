export default function Image({sr, ...rest}){
    return <>
    <div  {...rest}>
        <img src={sr} style={{width:"100%"}} alt="Not Found"/>
    </div>
    </>
}