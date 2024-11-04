<>
  <div className={styles.heroImage}>
    <Image src={heroBanner} layout="fill" objectFit="cover" />
  </div>
  <div className={styles.cta}>
    <Image style={{ marginLeft: '10px' }} height=" 200" width="200" layout="fixed" src={divinity} alt="" />
    <Image height="200" width="200" layout="fixed" src={synchronicity} alt="" />
    <div className={styles.ctaText}>
      <div>
        Your <em>Album</em> and <em>Artist</em> Name
      </div>
      <div className={styles.ctaSubText}>
        <div>on <em>Custom</em> Album Designs</div>
      </div>
      <button className="buton cta">Shop Now</button>
    </div>
    <Image height="200" width="200" layout="fixed" src={theUndertaking} alt="" />
    <Image height="200" width="200" layout="fixed" src={asTheSunSpeaks} alt="" />
  </div>
  <div className={styles.soundwavesImage}>
    <Image src={soundwaves} layout="responsive" alt='' />
  </div>
</>