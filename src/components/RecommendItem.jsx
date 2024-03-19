import styles from '../style/RecommendItem.module.css'


// {
// num: 1,
// title: "利用思否猫素材实现一个丝滑的轮播图（html + css + js）",
// href: "https://segmentfault.com/a/1190000042661646"
// }
function RecommendItem(props) {

    const { recommendInfo } = props
    return (
        <a target='_blank' href={recommendInfo.href} className={styles.RecommendItem} >
            <span className={styles.RecommendItemLeft}>
                {recommendInfo.num}
            </span>
            <span>
                {recommendInfo.title}
            </span>
        </a>
    );
}

export default RecommendItem;
