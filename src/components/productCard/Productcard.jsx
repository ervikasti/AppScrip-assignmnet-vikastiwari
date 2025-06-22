import heart from "../../assests/icons/heart.svg";
import style from "./Productcard.module.css";
export const Productcard = () => {
  return (
    <div className={style.container}>
      <img className={style.product_img} src="/logo512.png" alt="prod-img" loading="lazy"/>
      <p className={style.title}>poduct title this is great</p>
      <section className={style.bottom}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget
          ultricies nisl nisl eget nisl.
        </p>
        <img src={heart} alt='like'/>
      </section>
    </div>
  );
};
