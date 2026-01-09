// Initialize map centered on UK
const map = L.map('map').setView([54.5, -3.0], 6);

// Add OpenStreetMap tiles (free)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
}).addTo(map);

// Geocache locations data
const locations = [
        {
        id: 'BH-001',
        name: 'Cannock Chase',
        region: 'Staffordshire',
        coords: [52.75130624095723, -1.9735328097757627],
        difficulty: 'Easy',
        clue: 'Beyond the pines, under the stepping stones, search near the Black Eyed Girl',
        found: 23,
        status: 'Active'
    },
    {
        id: 'BH-004',
        name: 'Mam Tor Summit',
        region: 'Peak District',
        coords: [53.3583, -1.8167],
        difficulty: 'Moderate',
        clue: 'The broken road remembers. Search where the path crumbled.',
        found: 28,
        status: 'Active'
    },
   {
        id: 'BH-008',
        name: 'Cairngorms Forest',
        region: 'Scottish Highlands',
        coords: [57.0833, -3.6667],
        difficulty: 'Easy',
        clue: 'The ancient pines whisper secrets. Follow the red trail marker.',
        found: 34,
        status: 'Active'
    },
    {
        id: 'BH-009',
        name: 'Snowdon Ranger Path',
        region: 'Snowdonia',
        coords: [53.0685, -4.0762],
        difficulty: 'Hard',
        clue: 'Where legends climbed, beneath the ranger\'s stone.',
        found: 11,
        status: 'Active'
    },
];

// Custom icon for markers
const customIcon = L.divIcon({
    className: 'custom-marker',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15]
});

// Add markers to map
locations.forEach(location => {
    const marker = L.marker(location.coords, { icon: customIcon })
        .addTo(map);
    
    // Popup content
    const popupContent = `
        <div style="min-width: 250px;">
            <h3 style="margin-bottom: 0.5rem; color: #2c5530;">📍 ${location.name}</h3>
            <p style="margin: 0.25rem 0;"><strong>Box ID:</strong> ${location.id}</p>
            <p style="margin: 0.25rem 0;"><strong>Region:</strong> ${location.region}</p>
            <p style="margin: 0.25rem 0;"><strong>Difficulty:</strong> ${location.difficulty}</p>
            <hr style="margin: 0.5rem 0;">
            <p style="margin: 0.5rem 0;"><strong>🗺️ CLUE:</strong></p>
            <p style="font-style: italic; color: #666;">"${location.clue}"</p>
            <hr style="margin: 0.5rem 0;">
            <p style="margin: 0.25rem 0;"><strong>✅ Status:</strong> ${location.status}</p>
            <p style="margin: 0.25rem 0;"><strong>Found by:</strong> ${location.found} seekers</p>
            <p style="margin-top: 0.5rem; font-size: 0.9rem;">
                <a href="#" style="color: #4a7c4e;">📸 Share your find #FindBackstabbers</a>
            </p>
        </div>
    `;
    
    marker.bindPopup(popupContent);
});