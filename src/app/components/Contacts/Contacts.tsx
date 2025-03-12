import s from './contacts.module.scss';

const Contacts = () => {
  return (
    <section className={s.map_container}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.0034212669066!2d30.39060551224588!3d50.42240788926385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cbed88823bc7%3A0x6a4a0bb0433635d6!2z0LLRg9C7LiDQhtCy0LDQvdCwINCU0LfRjtCx0LgsIDksINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1suk!2sua!4v1741784307098!5m2!1suk!2sua"
        width="600"
        height="450"
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
