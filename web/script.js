document.addEventListener("DOMContentLoaded", function () {
  //   fetch("https://davidblackwellhall.com/api/stats")
  //     .then((response) => response.json())
  //     .then((data) => displayStats(data))
  //     .catch((error) => console.error("Error:", error));
  displayStats([
    {
      id: "1e2425a4-9e98-47a2-bc2e-2c392f3a5a88",
      room_name: "Conference Hall A",
      max_occupancy: 100,
      current_occupancy: 25,
    },
    {
      id: "2f342b34-5b6a-42fb-9dfe-2a425e67feed",
      room_name: "Meeting Room B",
      max_occupancy: 50,
      current_occupancy: 20,
    },
    {
      id: "3c453c56-6c7b-4dbc-affe-3b456c78deff",
      room_name: "Lecture Hall C",
      max_occupancy: 200,
      current_occupancy: 150,
    },
    {
      id: "4d564d78-7e8c-4ece-bbfe-4c567d89ef10",
      room_name: "Board Room D",
      max_occupancy: 20,
      current_occupancy: 10,
    },
    {
      id: "5e675e9a-8f9d-4fdf-cccf-5d678e9a01f1",
      room_name: "Training Room E",
      max_occupancy: 40,
      current_occupancy: 30,
    },
    {
      id: "6f786fac-9g0e-5g1f-dddf-6e789fac12g2",
      room_name: "Seminar Room F",
      max_occupancy: 80,
      current_occupancy: 50,
    },
    {
      id: "7g897gbe-a1f2-6h2g-eeef-7f890gbd23h3",
      room_name: "Open Space G",
      max_occupancy: 120,
      current_occupancy: 60,
    },
    {
      id: "8h908hcf-b2g3-7i3h-ffff-8g901hce34i4",
      room_name: "Workshop H",
      max_occupancy: 30,
      current_occupancy: 5,
    },
    {
      id: "9i019ide-c3h4-8j4i-gggg-9h012ide45j5",
      room_name: "Breakout Room I",
      max_occupancy: 15,
      current_occupancy: 8,
    },
    {
      id: "aj12ajef-d4i5-9k5j-hhhh-ai123ajf56k6",
      room_name: "VIP Lounge J",
      max_occupancy: 10,
      current_occupancy: 2,
    },
  ]);
});

function displayStats(data) {
  const container = document.getElementById("stats-container");

  data.forEach((item) => {
    const occupancyRate = item.current_occupancy / item.max_occupancy;
    let progressBarColor;

    if (occupancyRate < 0.3) progressBarColor = "green";
    else if (occupancyRate < 0.7) progressBarColor = "orange";
    else progressBarColor = "red";

    const statsItem = document.createElement("div");
    statsItem.className = "stats-item";
    statsItem.innerHTML = `
            <h2>${item.room_name}</h2>
            <p>Current Occupancy: ${item.current_occupancy}</p>
            <p>Max Occupancy: ${item.max_occupancy}</p>
            <div class="progress-bar">
                <div class="progress" style="width: ${
                  occupancyRate * 100
                }%; background-color: ${progressBarColor};"></div>
            </div>
        `;
    container.appendChild(statsItem);
  });
}
