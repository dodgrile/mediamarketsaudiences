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
        clue: 'Something something stepping stones',
        found: 23,
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