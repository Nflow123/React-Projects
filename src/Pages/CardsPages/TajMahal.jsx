import React from 'react'
import CardPageTemplate from '../../Components/Layout/CardPageTemplate';
import TajMahalBanner1 from '../../assets/banners/taj-mahal-banner1.jpg';
import TajMahalBanner2 from '../../assets/banners/taj-mahal-banner2.jpg';
import TajMahalBanner3 from '../../assets/banners/taj-mahal-banner3.jpg';
import TajMahalBanner4 from '../../assets/banners/taj-mahal-banner4.jpg';

function TajMahal() {
  return (
    (
        <CardPageTemplate img1={TajMahalBanner1} img2={TajMahalBanner2} img3={TajMahalBanner3} img4={TajMahalBanner4} title="Taj Mahal" desc="The Taj Mahal, a UNESCO World Heritage site located in Agra, India, is an architectural masterpiece and a symbol of eternal love. This iconic white marble mausoleum stands as a testament to the unparalleled craftsmanship and the enduring legacy of the Mughal Empire.

        As you approach the Taj Mahal, its majestic silhouette appears like a vision from a fairytale. The perfectly symmetrical structure is adorned with intricate carvings, delicate marble inlays, and sparkling gemstones, creating a breathtaking display of artistry.
        
        At sunrise or sunset, the Taj Mahal transforms, casting a soft glow that seems to emanate from within. The reflection of the pristine white marble shimmers in the surrounding pools, adding to the ethereal beauty of the monument.
        
        Step inside the Taj Mahal and be immersed in its serene ambiance. The central dome, flanked by four minarets, houses the tombs of Emperor Shah Jahan and his beloved wife, Mumtaz Mahal, whose memory inspired the creation of this architectural marvel.
        
        The gardens that surround the Taj Mahal are a meticulously manicured paradise. Lush greenery, vibrant flowers, and tranquil waterways provide a peaceful retreat, inviting visitors to linger and soak in the splendor of the monument.
        
        The Taj Mahal's significance extends beyond its architectural grandeur. It represents a profound expression of love and devotion, as Emperor Shah Jahan built it as a mausoleum for his beloved wife, Mumtaz Mahal, who passed away during childbirth.
        
        Visiting the Taj Mahal is a journey through history, art, and romance. Its allure has captured the imagination of poets, artists, and travelers from around the world, drawing them to witness its unparalleled beauty."/>
      )
  )
}

export default TajMahal
