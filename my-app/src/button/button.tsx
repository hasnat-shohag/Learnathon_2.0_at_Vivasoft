import './button.css';

interface ButtonPropsTypes{
    size: string;
}
// function btn(){
//     console.log("CLicked");
//     ++count;
// }
let count = 0;
const Button = (props: ButtonPropsTypes)=>{
    const {size} = props;
    return <button className= '_style' >Click Me {count}</button>
}
export default Button;