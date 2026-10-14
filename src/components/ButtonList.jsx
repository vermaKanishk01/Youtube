import Button from './Button'

const list = ["All", "Live", "Gaming", "Songs", "Socker", "Cricket", "Cooking", "Sports", "News"]

const ButtonList = () => {
  return (
    <div className='flex'>
      {
        list.map((btn_text, index) => <Button key={index} name={btn_text} />)
      }
    </div>
  )
}

export default ButtonList