import styles from './Multifilter.module.css'
export const Multifilter =()=>{
    return(
        <aside className={styles.container}>
            <h3>CUSTOMIZABLE</h3>

            
            <section class="filter-group">
              <h3>IDEAL FOR</h3>
              <ul>
                <li>All</li>
              </ul>
            </section>

            <section class="filter-group">
              <h3>OCCASION</h3>
              <ul>
                <li>All</li>
              </ul>
            </section>

            <section class="filter-group">
              <h3>WORK</h3>
              <ul>
                <li>All</li>
              </ul>
            </section>

            <section class="filter-group">
              <h3>FABRIC</h3>
              <ul>
                <li>All</li>
              </ul>
            </section>

            <section class="filter-group">
              <h3>SEGMENT</h3>
              <ul>
                <li>All</li>
              </ul>
            </section>

            <section class="filter-group">
              <h3>SUITABLE FOR</h3>
              <ul>
                <li>All</li>
              </ul>
            </section>

            <section class="filter-group">
              <h3>RAW MATERIALS</h3>
              <ul>
                <li>All</li>
              </ul>
            </section>

            <section class="filter-group">
              <h3>PATTERN</h3>
              <ul>
                <li>All</li>
              </ul>
            </section>

            <div class="new-product-tag">NEW PRODUCT</div>
          </aside>
    )
}