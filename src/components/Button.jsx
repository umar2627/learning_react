
 export default function Button(props) {

  console.log('our btn props', props);
  return (
    <button onClick={props.onClick}>
      {props.btnText || 'BUTTON' }
    </button>
  )
}

