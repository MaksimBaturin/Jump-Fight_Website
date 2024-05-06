import styles from "./page.module.css"
import Image from "next/image";
import screenshot1 from "/public/screenshot1.png"
import screenshot2 from "/public/screenshot2.png"
import screenshot3 from "/public/screenshot3.png"

export default function Home() {
  return (
      <main className={styles.main}>
          <h1 className={styles.text}>Jump 'n Fight</h1>
          <div className={styles.content}>
              <div className={styles.description}>
                  <p className={styles.descriptionHeader}>
                      Описание
                  </p>
                  <p className={styles.descriptionContent}>
                      Аркадный платформер с видом сбоку в сеттинге классического фентези. Жанры - platformer,
                      rogue-lite.
                      Главной задачей игрока является подъем по башне при помощи прыжков. Однако, помимо преодоления
                      платформ,
                      игроку предстоит столкнуться с врагами на отдельных аренах, что представляют собой промежуточный
                      этап
                      между прыжковыми секциями. Визуально игра выполнена в стиле пиксельной графики для лучшего
                      погружения
                      в атмосферу игр подобного жанра. Платформа, для которой разрабатывается игровой продукт - ПК.
                  </p>
              </div>
              <Image src={screenshot1} alt={"screenshot1"} width={760} height={480} className={styles.descriptionImg}/>
          </div>
          <div className={styles.content}>
              <Image src={screenshot2} alt={"screenshot2"} width={760} height={480} className={styles.descriptionImg}/>
              <div className={styles.description}>
                  <p className={styles.descriptionContent}>
                      Игроку предоставляется возможность прочувствовать ключевые
                      возможности двух на первый взгляд несовместимых жанров.
                      Данная идея реализована с помощью разделения игрового процесса
                      на две части - прыжковую и боевую. Прыжковая секция выполнена
                      в стиле Doodle Jump и включает в себя неконролируемый подъем по платформам,
                      преодоление врагов и сбор бонусов, влияющих на урон, здоровье и другие показатели
                      персонажа. Боевая секция столкнет игрока с большим разнообразием противников
                      и главным боссом, за победу над которым, можно будет получить всевозможные награды.
                      Разделение на секции также обусловлено применением разных геймплейных особенностей.
                  </p>
              </div>
          </div>
          <div className={styles.content}>
              <Image src={screenshot3} alt={"screenshot3"} width={760} height={480} className={styles.descriptionImg}/>
              <div className={styles.description}>
                  <p className={styles.descriptionContent}>
                      Над игрой работали:
                  </p>
                  <li className={styles.descriptionContent}>
                      <a className={styles.a} href={"https://github.com/DmitriySkiba"}>Dmitriy Skibinskiy</a>
                  </li>
                  <li className={styles.descriptionContent}>
                      <a className={styles.a} href={"https://github.com/MaksimBaturin"}>Maksim Baturin</a>
                  </li>
                  <li className={styles.descriptionContent}>
                      <a className={styles.a} href={"https://github.com/AsanSmailov"}>Asan Smailov</a>
                  </li>
                  <li className={styles.descriptionContent}>
                      <a className={styles.a} href={"https://github.com/DiarrheaGiver"}>Amet Chalbash</a>
                  </li>
                  <li className={styles.descriptionContent}>
                      <a className={styles.a} href={"https://github.com/EmirBuzhurov"}>Emir Buzhurov</a>
                  </li>
                  <p className={styles.descriptionContent}>
                      Скачать игру можно тут: <a className={styles.a}
                                                 href={"https://github.com/DmitriySkiba/Jump-Fight/releases"}>Ссылка</a>
                  </p>
              </div>
          </div>
          <div className={styles.content}>
              <div className={styles.description}>
                  <p className={styles.descriptionContent}>
                      Feedback: lazystudentsst@gmail.com
                  </p>
              </div>
          </div>
      </main>
  );
}
