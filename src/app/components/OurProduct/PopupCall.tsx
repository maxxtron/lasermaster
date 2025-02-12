import s from './popupcall.module.scss'


const PopupCall = () => {
  return (
    <div className={s.container}>
        <h2 className={s.title}>Замовлення дзвінка</h2>
        <span className={s.subtitle}>Надішліть форму і ми вам передзвонимо</span>
    </div>
  )
}

export default PopupCall
