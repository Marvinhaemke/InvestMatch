'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tinderContainer = document.querySelector('.tinder');
  const cardsContainer = document.getElementById('cards-container');
  const nope = document.getElementById('nope');
  const love = document.getElementById('love');
  const favoritesBtn = document.getElementById('favorites-btn');
  const favoritesModal = document.getElementById('favoritesModal');
  const closeFavorites = document.getElementById('closeFavorites');
  const favoritesList = document.getElementById('favoritesList');

  // Sample data
  let investments = [
    {
      title: "EcoVillage Co-Living Fund",
      type: "Crowdfunded Real Estate",
      expectedReturn: "5-7%",
      buyIn: "$1,000 - $10,000",
      description: "A sustainable co-living development project with environmentally conscious design, targeting millennials and offering attractive returns through shared living spaces.",
      img: "https://images.unsplash.com/photo-1721149122657-7b5440f39160?crop=entropy&cs=srgb&fm=jpg&q=85"
    },
    {
      title: "Downtown Retail Partnership",
      type: "Real Estate Syndication",
      expectedReturn: "6-8%",
      buyIn: "$50,000 - $100,000",
      description: "Invest in a retail-focused property partnership in bustling downtown locations, benefiting from stable lease agreements with established businesses.",
      img: "https://images.unsplash.com/photo-1494526585095-c41746248156?crop=entropy&cs=srgb&fm=jpg&q=85"
    },
    {
      title: "Oakwood Luxury Rental",
      type: "Rental Property",
      expectedReturn: "$1,200 - $1,800 monthly",
      buyIn: "$350,000 - $450,000",
      description: "A high-end rental property located in a prime suburban area, ideal for long-term tenants seeking luxury living and offering a high rental yield for investors.",
      img: "https://images.unsplash.com/photo-1631889477974-6394c9988436?crop=entropy&cs=srgb&fm=jpg&q=85"
    },
    {
      title: "Global Property Growth ETF",
      type: "Exchange-Traded Fund (ETF)",
      expectedReturn: "3-5%",
      buyIn: "$50 - $200 per share",
      description: "This ETF provides diversified exposure to global real estate markets, including commercial, residential, and industrial properties, for a balanced risk-return profile.",
      img: "https://images.unsplash.com/photo-1629236714680-c9b8359ac71a?crop=entropy&cs=srgb&fm=jpg&q=85"
    },
    {
      title: "Sunrise Residential REIT",
      type: "Real Estate Investment Trust (REIT)",
      expectedReturn: "4-6%",
      buyIn: "$500 - $1,000 per share",
      description: "Sunrise Residential REIT focuses on high-demand urban residential properties, offering steady income streams through rental income and moderate capital appreciation.",
      img: "https://images.unsplash.com/photo-1685233503234-0c56fd142ac7?crop=entropy&cs=srgb&fm=jpg&q=85"
    },
    {
      title: "EcoVillage Co-Living Fund",
      type: "Crowdfunded Real Estate",
      expectedReturn: "5-7%",
      buyIn: "$1,000 - $10,000",
      description: "A sustainable co-living development project with environmentally conscious design, targeting millennials and offering attractive returns through shared living spaces.",
      img: "https://images.unsplash.com/photo-1721149122657-7b5440f39160?crop=entropy&cs=srgb&fm=jpg&q=85"
    },
    {
      title: "Downtown Retail Partnership",
      type: "Real Estate Syndication",
      expectedReturn: "6-8%",
      buyIn: "$50,000 - $100,000",
      description: "Invest in a retail-focused property partnership in bustling downtown locations, benefiting from stable lease agreements with established businesses.",
      img: "https://images.unsplash.com/photo-1494526585095-c41746248156?crop=entropy&cs=srgb&fm=jpg&q=85"
    },
    {
      title: "Oakwood Luxury Rental",
      type: "Rental Property",
      expectedReturn: "$1,200 - $1,800 monthly",
      buyIn: "$350,000 - $450,000",
      description: "A high-end rental property located in a prime suburban area, ideal for long-term tenants seeking luxury living and offering a high rental yield for investors.",
      img: "https://images.unsplash.com/photo-1631889477974-6394c9988436?crop=entropy&cs=srgb&fm=jpg&q=85"
    },
    {
      title: "Global Property Growth ETF",
      type: "Exchange-Traded Fund (ETF)",
      expectedReturn: "3-5%",
      buyIn: "$50 - $200 per share",
      description: "This ETF provides diversified exposure to global real estate markets, including commercial, residential, and industrial properties, for a balanced risk-return profile.",
      img: "https://images.unsplash.com/photo-1629236714680-c9b8359ac71a?crop=entropy&cs=srgb&fm=jpg&q=85"
    },
    {
      title: "Sunrise Residential REIT",
      type: "Real Estate Investment Trust (REIT)",
      expectedReturn: "4-6%",
      buyIn: "$500 - $1,000 per share",
      description: "Sunrise Residential REIT focuses on high-demand urban residential properties, offering steady income streams through rental income and moderate capital appreciation.",
      img: "https://images.unsplash.com/photo-1685233503234-0c56fd142ac7?crop=entropy&cs=srgb&fm=jpg&q=85"
    },
    {
      title: "EcoVillage Co-Living Fund",
      type: "Crowdfunded Real Estate",
      expectedReturn: "5-7%",
      buyIn: "$1,000 - $10,000",
      description: "A sustainable co-living development project with environmentally conscious design, targeting millennials and offering attractive returns through shared living spaces.",
      img: "https://images.unsplash.com/photo-1721149122657-7b5440f39160?crop=entropy&cs=srgb&fm=jpg&q=85"
    },
    {
      title: "Downtown Retail Partnership",
      type: "Real Estate Syndication",
      expectedReturn: "6-8%",
      buyIn: "$50,000 - $100,000",
      description: "Invest in a retail-focused property partnership in bustling downtown locations, benefiting from stable lease agreements with established businesses.",
      img: "https://images.unsplash.com/photo-1494526585095-c41746248156?crop=entropy&cs=srgb&fm=jpg&q=85"
    },
    {
      title: "Oakwood Luxury Rental",
      type: "Rental Property",
      expectedReturn: "$1,200 - $1,800 monthly",
      buyIn: "$350,000 - $450,000",
      description: "A high-end rental property located in a prime suburban area, ideal for long-term tenants seeking luxury living and offering a high rental yield for investors.",
      img: "https://images.unsplash.com/photo-1631889477974-6394c9988436?crop=entropy&cs=srgb&fm=jpg&q=85"
    },
    {
      title: "Global Property Growth ETF",
      type: "Exchange-Traded Fund (ETF)",
      expectedReturn: "3-5%",
      buyIn: "$50 - $200 per share",
      description: "This ETF provides diversified exposure to global real estate markets, including commercial, residential, and industrial properties, for a balanced risk-return profile.",
      img: "https://images.unsplash.com/photo-1629236714680-c9b8359ac71a?crop=entropy&cs=srgb&fm=jpg&q=85"
    },
    {
      title: "Sunrise Residential REIT",
      type: "Real Estate Investment Trust (REIT)",
      expectedReturn: "4-6%",
      buyIn: "$500 - $1,000 per share",
      description: "Sunrise Residential REIT focuses on high-demand urban residential properties, offering steady income streams through rental income and moderate capital appreciation.",
      img: "https://images.unsplash.com/photo-1685233503234-0c56fd142ac7?crop=entropy&cs=srgb&fm=jpg&q=85"
    },
    {
      title: "EcoVillage Co-Living Fund",
      type: "Crowdfunded Real Estate",
      expectedReturn: "5-7%",
      buyIn: "$1,000 - $10,000",
      description: "A sustainable co-living development project with environmentally conscious design, targeting millennials and offering attractive returns through shared living spaces.",
      img: "https://images.unsplash.com/photo-1721149122657-7b5440f39160?crop=entropy&cs=srgb&fm=jpg&q=85"
    },
    {
      title: "Downtown Retail Partnership",
      type: "Real Estate Syndication",
      expectedReturn: "6-8%",
      buyIn: "$50,000 - $100,000",
      description: "Invest in a retail-focused property partnership in bustling downtown locations, benefiting from stable lease agreements with established businesses.",
      img: "https://images.unsplash.com/photo-1494526585095-c41746248156?crop=entropy&cs=srgb&fm=jpg&q=85"
    },
    {
      title: "Oakwood Luxury Rental",
      type: "Rental Property",
      expectedReturn: "$1,200 - $1,800 monthly",
      buyIn: "$350,000 - $450,000",
      description: "A high-end rental property located in a prime suburban area, ideal for long-term tenants seeking luxury living and offering a high rental yield for investors.",
      img: "https://images.unsplash.com/photo-1631889477974-6394c9988436?crop=entropy&cs=srgb&fm=jpg&q=85"
    },
    {
      title: "Global Property Growth ETF",
      type: "Exchange-Traded Fund (ETF)",
      expectedReturn: "3-5%",
      buyIn: "$50 - $200 per share",
      description: "This ETF provides diversified exposure to global real estate markets, including commercial, residential, and industrial properties, for a balanced risk-return profile.",
      img: "https://images.unsplash.com/photo-1629236714680-c9b8359ac71a?crop=entropy&cs=srgb&fm=jpg&q=85"
    },
    {
      title: "Sunrise Residential REIT",
      type: "Real Estate Investment Trust (REIT)",
      expectedReturn: "4-6%",
      buyIn: "$500 - $1,000 per share",
      description: "Sunrise Residential REIT focuses on high-demand urban residential properties, offering steady income streams through rental income and moderate capital appreciation.",
      img: "https://images.unsplash.com/photo-1685233503234-0c56fd142ac7?crop=entropy&cs=srgb&fm=jpg&q=85"
    },
    {
      title: "EcoVillage Co-Living Fund",
      type: "Crowdfunded Real Estate",
      expectedReturn: "5-7%",
      buyIn: "$1,000 - $10,000",
      description: "A sustainable co-living development project with environmentally conscious design, targeting millennials and offering attractive returns through shared living spaces.",
      img: "https://images.unsplash.com/photo-1721149122657-7b5440f39160?crop=entropy&cs=srgb&fm=jpg&q=85"
    },
    {
      title: "Downtown Retail Partnership",
      type: "Real Estate Syndication",
      expectedReturn: "6-8%",
      buyIn: "$50,000 - $100,000",
      description: "Invest in a retail-focused property partnership in bustling downtown locations, benefiting from stable lease agreements with established businesses.",
      img: "https://images.unsplash.com/photo-1494526585095-c41746248156?crop=entropy&cs=srgb&fm=jpg&q=85"
    },
    {
      title: "Oakwood Luxury Rental",
      type: "Rental Property",
      expectedReturn: "$1,200 - $1,800 monthly",
      buyIn: "$350,000 - $450,000",
      description: "A high-end rental property located in a prime suburban area, ideal for long-term tenants seeking luxury living and offering a high rental yield for investors.",
      img: "https://images.unsplash.com/photo-1631889477974-6394c9988436?crop=entropy&cs=srgb&fm=jpg&q=85"
    },
    {
      title: "Global Property Growth ETF",
      type: "Exchange-Traded Fund (ETF)",
      expectedReturn: "3-5%",
      buyIn: "$50 - $200 per share",
      description: "This ETF provides diversified exposure to global real estate markets, including commercial, residential, and industrial properties, for a balanced risk-return profile.",
      img: "https://images.unsplash.com/photo-1629236714680-c9b8359ac71a?crop=entropy&cs=srgb&fm=jpg&q=85"
    },
    {
      title: "Sunrise Residential REIT",
      type: "Real Estate Investment Trust (REIT)",
      expectedReturn: "4-6%",
      buyIn: "$500 - $1,000 per share",
      description: "Sunrise Residential REIT focuses on high-demand urban residential properties, offering steady income streams through rental income and moderate capital appreciation.",
      img: "https://images.unsplash.com/photo-1685233503234-0c56fd142ac7?crop=entropy&cs=srgb&fm=jpg&q=85"
    }
  ];

  // We will not filter now, just render all.
  let filteredInvestments = [...investments];

  function renderCards() {
    cardsContainer.innerHTML = '';
    filteredInvestments.forEach((inv, idx) => {
      const card = document.createElement('div');
      card.classList.add('tinder--card');
      card.innerHTML = `
        <img src="${inv.img}" alt="${inv.title}">
        <h2>${inv.title}</h2>
        <p style="text-align: left;"><strong>Type:</strong> ${inv.type}</p>
        <p style="text-align: left;"><strong>Expected Monthly Return:</strong> ${inv.expectedReturn}</p>
        <p style="text-align: left;"><strong>Buy-In Price:</strong> ${inv.buyIn}</p>
        <p style="text-align: left;">${inv.description}</p>
        
      `;
      card.setAttribute('data-index', idx);
      cardsContainer.appendChild(card);
    });
    initCards();
    attachCardEvents();
  }

  function initCards() {
    let allCards = document.querySelectorAll('.tinder--card:not(.removed)');
    allCards.forEach(function (card, index) {
      card.style.zIndex = allCards.length - index;
      card.style.transform = 'scale(' + (20 - index) / 20 + ') translateY(-' + 30 * index + 'px)';
      card.style.opacity = (10 - index) / 10;
    });

    tinderContainer.classList.add('loaded');
  }

  function attachCardEvents() {
    let allCards = document.querySelectorAll('.tinder--card:not(.removed)');
    allCards.forEach(function (el) {
      var hammertime = new Hammer(el);

      hammertime.on('pan', function (event) {
        el.classList.add('moving');
      });

      hammertime.on('pan', function (event) {
        if (event.deltaX === 0) return;
        if (event.center.x === 0 && event.center.y === 0) return;

        tinderContainer.classList.toggle('tinder_love', event.deltaX > 0);
        tinderContainer.classList.toggle('tinder_nope', event.deltaX < 0);

        var xMulti = event.deltaX * 0.03;
        var yMulti = event.deltaY / 80;
        var rotate = xMulti * yMulti;

        event.target.style.transform = 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px) rotate(' + rotate + 'deg)';
      });

      hammertime.on('panend', function (event) {
        el.classList.remove('moving');
        tinderContainer.classList.remove('tinder_love');
        tinderContainer.classList.remove('tinder_nope');

        var moveOutWidth = document.body.clientWidth;
        var keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;


        event.target.classList.toggle('removed', !keep);

        
        

        if (keep) {
          event.target.style.transform = '';
        } else {
          if (event.deltaX > 0) {
            // Liked
            saveToFavorites(event.target);
          }
          var endX = Math.max(Math.abs(event.velocityX) * moveOutWidth, moveOutWidth);
          var toX = event.deltaX > 0 ? endX : -endX;
          var endY = Math.abs(event.velocityY) * moveOutWidth;
          var toY = event.deltaY > 0 ? endY : -endY;
          var xMulti = event.deltaX * 0.03;
          var yMulti = event.deltaY / 80;
          var rotate = xMulti * yMulti;

          event.target.style.transform = 'translate(' + toX + 'px, ' + (toY + event.deltaY) + 'px) rotate(' + rotate + 'deg)';
          initCards();
        }
      });

      // Detect click on bottom half of the card to expand
      el.addEventListener('click', function(e) {
        if (el.classList.contains('expanded')) return; // already expanded
        
        expandCard(el);
        
      });
    });
  }

  function createButtonListener(love) {
    return function (event) {
      var cards = document.querySelectorAll('.tinder--card:not(.removed)');
      var moveOutWidth = document.body.clientWidth * 1.5;

      if (!cards.length) return false;

      var card = cards[0];

      // If card is expanded, first revert to normal
      if (card.classList.contains('expanded')) {
        collapseCard(card);
      }
      card.classList.add('removed');

      if (love) {
        card.style.transform = 'translate(' + moveOutWidth + 'px, -100px) rotate(-30deg)';
        saveToFavorites(card);
      } else {
        card.style.transform = 'translate(-' + moveOutWidth + 'px, -100px) rotate(30deg)';
      }

      initCards();
      

      event.preventDefault();
    };
  }

  var nopeListener = createButtonListener(false);
  var loveListener = createButtonListener(true);

  nope.addEventListener('click', nopeListener);
  love.addEventListener('click', loveListener);

  // Save Liked Investment to Local Storage
  function saveToFavorites(cardElement) {
    const title = cardElement.querySelector('h2').innerText;
    const inv = investments.find(i => i.title === title);
    if (!inv) return;
    let stored = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!stored.find(item => item.title === inv.title)) {
      stored.push(inv);
      localStorage.setItem('favorites', JSON.stringify(stored));
    }
  }

  // Open Favorites Modal
  favoritesBtn.addEventListener('click', () => {
    const stored = JSON.parse(localStorage.getItem('favorites')) || [];
    favoritesList.innerHTML = '';
    if (stored.length === 0) {
      favoritesList.innerHTML = '<p>No favorites yet.</p>';
    } else {
      stored.forEach(fav => {
        const div = document.createElement('div');
        div.classList.add('fav-item');
        div.innerHTML = `
          <h3>${fav.title}</h3>
          <p><strong>Type:</strong> ${fav.type}</p>
          <p><strong>Expected Return:</strong> ${fav.expectedReturn}</p>
          <p><strong>Buy-In:</strong> ${fav.buyIn}</p>
        `;
        favoritesList.appendChild(div);
      });
    }
    favoritesModal.style.display = 'block';
  });

  closeFavorites.addEventListener('click', () => {
    favoritesModal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === favoritesModal) {
      favoritesModal.style.display = 'none';
    }
  });

  // Expand card to fullscreen
  function expandCard(card) {
    card.classList.add('expanded');
    // Add touch and scroll listeners for pull-to-close behavior
    let startY = null;
    let isPullingDown = false;

    const onTouchStart = (e) => {
      if (card.scrollTop === 0) {
        startY = e.touches[0].clientY;
        isPullingDown = true;
      } else {
        isPullingDown = false;
      }
    };

    const onTouchMove = (e) => {
      if (!isPullingDown || startY === null) return;
      let currentY = e.touches[0].clientY;
      if (card.scrollTop === 0 && currentY > startY + 30) {
        // Pull down detected, collapse card
        collapseCard(card);
      }
    };

    card.addEventListener('touchstart', onTouchStart, {passive:true});
    card.addEventListener('touchmove', onTouchMove, {passive:true});

    // Also allow collapse if user presses nope/love buttons (handled in button listeners)
  }

  // Collapse card back to original stack
  function collapseCard(card) {
    card.classList.remove('expanded');
  }

  // Initial render
  renderCards();
});
