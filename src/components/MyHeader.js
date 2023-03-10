const MyHeader = ({headText, leftChild, rightChild }) => {

  return (
  <header>
    <div className="head_text_top">
      {new Date().getFullYear()}
    </div>
    <div className="head_text_left">
      {leftChild}
    </div>
    <div className="head_text">
      {headText}
    </div>
    <div className="head_btn_rigth">
      {rightChild}
    </div>
  </header>
  )
}

export default MyHeader;