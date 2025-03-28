import s from './contacts.module.scss';

const Contacts = () => {
  return (
    <section className={s.map_container} id="location">
      <h2 className={s.location}>де знаходимось</h2>
      {/* <h3 className={s.sub_location}>Lasermaster у Києві: завжди поруч для ваших проєктів</h3> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.0277673169962!2d30.39746164293769!3d50.42195428316846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cbf1eeff110b%3A0x6b8aa1e160586574!2z0L_RgNC-0YHQv9C10LrRgiDQkNC60LDQtNC10LzRltC60LAg0JrQvtGA0L7Qu9GM0L7QstCwLCA5LCDQmtC40ZfQsiwgMDIwMDA!5e0!3m2!1suk!2sua!4v1741856038836!5m2!1suk!2sua"
        width="100%"
        height="600"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={s.map}
      ></iframe>
    </section>
  );
};

export default Contacts;
