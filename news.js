// News Data
const newsData = [
    {
        image: 'images/news1.png',
        headline: 'Not Taj Mahal Replica, Madhya Pradesh Chief Minister Says "We Gift These..."',
        description: 'We gift Geeta, Ramayan, Mahabharat, and the holy texts of Sanatan dharma to foreign guests, said Madhya Pradesh Chief Minister Mohan Yadav...',
        fullDescription: 'We gift Geeta, Ramayan, Mahabharat, and the holy texts of Sanatan dharma to foreign guests, said Madhya Pradesh Chief Minister Mohan Yadav. Participating in Rudrabhishek programme in Sehore district, Madhya Pradesh Chief Minister Mohan Yadav said, now Indians don\'t need to have to give the Taj Mahal (replica) to foreign guests anymore instead we gift Geeta, Ramayan, Mahabharat, and the holy texts of Sanatan dharma.Mr Yadav was speaking at Jarrapur village under Budhni Tehsil of the district when he said, "India has gained respect on international level and it feels good that we don\'t have to give the Taj Mahal (replica) to foreign guests anymore, we gift them the Geeta, Ramayan, Mahabharat, the holy texts of Sanatan dharma...Mr Yadav\'s statement came while he was assuring saints of providing permanent space in Ujjain for the construction of Dharamshala, halls for religious gatherings and other infrastructure for religious purposes.Mr Yadav also said that the government is going to give "legal permission" for the same.Earlier on Saturday, CM also performed the bhoomi pujan of an IT Park worth Rs46 crores in Ujjain, underlining the state government\'s commitment to fostering industrial and technological growth.Sharing the development on social media X (formerly known as X), the Chief Minister said, "Our endeavour is to pave the way for industrial development by creating favourable conditions for investment in Madhya Pradesh, along with promoting technology and innovation through entrepreneurship, thereby increasing employment opportunities in the field of technology."'    },
    {
        image: 'images/news2.png',
        headline: 'Great Wall of China damaged by excavators: Two detained in controversial shortcut attempt',
        description: 'In an audacious act of disregard for history and cultural heritage, two individuals have been detained by authorities in Shanxi province for excavating a hole through the Great Wall of China...',
        fullDescription: 'A Blatant Offense Against a Symbol of History In an audacious act of disregard for history and cultural heritage, two individuals have been detained by authorities in Shanxi province for excavating a hole through the Great Wall of China. This monumental structure, crafted over centuries to thwart foreign invasions, fell victim to an excavator-driven shortcut, leaving a permanent scar on this ancient wonder....',
    },
    {
        image: 'images/news3.png',
        headline: 'Egyptian man visits new 7 wonders of the world in less than 7 days. True story',
        description: 'An Egyptian man set a world record as he visited the new seven wonders of the world in less than 7 days. Read his story here....',
        fullDescription: 'An Egyptian man set a world record as he achieved the fastest time to visit the new seven wonders of the world. Magdy Eissa, 45, visited the seven renowned locations around the world in 6 days, 11 hours and 52 minutes, using only public transport.Applauding Eissa for his achievement, Guinness World Records shared his video on Instagram that featured snippets of his tour.Eissa began his tour with the Great Wall of China, followed by the Taj Mahal in Agra and the ancient city of Petra in Jordan. Then, he headed to Rome’s Colosseum, Christ the Redeemer in Brazil and Machu Picchu in Peru. His tour concluded with the ancient Mayan city Chichen Itza in Mexico. With this incredible feat, Eissa also beat the previous record set by Englishman Jamie McDonald last year. It took almost one and a half years for Eissa to plan his tour. “I had to navigate a complex web of flights, trains, buses, subways and walking between transportation hubs and the Wonders,” Eissa told Guinness World Records.“A single disruption could derail the entire itinerary and result in a flight back home.”During his adventurous tour, however, Eissa missed the usual bus to Petra as he overslept. Because of this, he had to rush to locate an alternative public bus. This was a challenging task because the site is mainly accessible through private tour services and taxis.Eissa nearly missed his flight from Peru to Mexico as well. Fortunately, airline staff reopened the check-in counter after he explained that he was attempting to break a world record.Visiting the new seven wonders of the world was a childhood dream for Eissa as he celebrated his personal accomplishment.',
    },
];

// Render News Cards
function renderNewsCards() {
    const container = document.getElementById('news-container');
    container.innerHTML = '';

    newsData.forEach((news, index) => {
        const card = document.createElement('div');
        card.className = 'news-card';
        card.innerHTML = `
            <div class="news-image">
                <img src="${news.image}" alt="${news.headline}">
            </div>
            <div class="news-content">
                <h3>${news.headline}</h3>
                <p>${news.description.slice(0, 100)}...</p>
                <button>Read More</button>
            </div>
        `;
        card.querySelector('button').addEventListener('click', () => showFullArticle(index));
        container.appendChild(card);
    });
}

// Show Full Article in Dialog
function showFullArticle(index) {
    const modal = document.createElement('div');
    modal.className = 'news-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <img src="${newsData[index].image}" alt="${newsData[index].headline}" class="detail-image">
            <h1>${newsData[index].headline}</h1>
            <div class="detail-content">
                <p>${newsData[index].fullDescription}</p>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Add close functionality
    const closeModal = () => modal.remove();
    modal.querySelector('.close-modal').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

// Initialize the Page
document.addEventListener('DOMContentLoaded', renderNewsCards);
