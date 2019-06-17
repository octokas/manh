;(function (window, document, undefined) {

	'use strict';

	//
	// Variables
	//

	var form = document.querySelector('#form-search');
	var input = document.querySelector('#input-search');
	var resultList = document.querySelector('#search-results');

    var searchIndex = [
        {
            title: "AA Batteries",
            keyword: "battery, batteries, charge",
            url: "options/noun_Battery_57587.png",
            content: "AA Batteries with lightning bolt",
            img: "options/noun_Battery_57587.png"
        },
        {
            title: "AA Batteries Alt.",
            keyword: "battery, batteries, charge",
            url: "options/noun_Battery_235367.png",
            content: "AA Batteries with plus and detail",
            img: "options/noun_Battery_235367.png",
        },
        {
            title: "Watter Bottle",
            keyword: "water, bottle",
            url: "options/noun_Water-Bottle_2079111.png",
            content: "Standard plastic water bottle",
            img: "options/noun_Battery_235367.png",
        },
        {
            title: "Water Bottle Alt.",
            keyword: "water, bottle",
            url: "options/noun_Water-Bottle_2147105.png",
            content: "Two small standard plastic water bottles side-by-side",
            img: "options/noun_Battery_235367.png",
        },
        {
            title: "Water Bottle Alt.",
            keyword: "water, bottle",
            url: "options/noun_Water-Bottle_1699377.png",
            content: "Sports cap water bottle",
            img: "options/noun_Water-Bottle_1699377.png",
        },
        {
            title: "Water Bottle Alt.",
            keyword: "water, bottle",
            url: "options/noun_Water-Bottle_315082.png",
            content: "Gallon sized water cooler water jug",
            img: "options/noun_Water-Bottle_315082.png",
        },
        {
            title: "Canned Goods",
            keyword: "canned, goods, tin, can, food",
            url: "options/noun_Tin-Can_958654.png",
            content: "Standard canned goods can with label",
            img: "options/noun_Water-Bottle_315082.png",
        },
        {
            title: "Canned Goods Alt.",
            keyword: "canned, goods, tin, can, food",
            url: "options/noun_canned-food_2405045.png",
            content: "Drawn illustration of standard can with label",
            img: "options/noun_Water-Bottle_315082.png",
        },
        {
            title: "Canned Goods Alt.",
            keyword: "canned, goods, tin, can, food, beans",
            url: "options/noun_bean-can_490214.png",
            content: "Standard bean can, solid color with beans symbol on label",
            img: "options/noun_Water-Bottle_315082.png",
        },
        {
            title: "AA Batteries",
            keyword: "battery, batteries, charge",
            url: "options/noun_Battery_57587.png",
            content: "AA Batteries with lightning bolt"
        },
        {
            title: "AA Batteries",
            keyword: "battery, batteries, charge",
            url: "options/noun_Battery_57587.png",
            content: "AA Batteries with lightning bolt"
        },
        {
            title: "AA Batteries",
            keyword: "battery, batteries, charge",
            url: "options/noun_Battery_57587.png",
            content: "AA Batteries with lightning bolt"
        },
        {
            title: "AA Batteries",
            keyword: "battery, batteries, charge",
            url: "options/noun_Battery_57587.png",
            content: "AA Batteries with lightning bolt"
        },
        {
            title: "AA Batteries",
            keyword: "battery, batteries, charge",
            url: "options/noun_Battery_57587.png",
            content: "AA Batteries with lightning bolt"
        },
        {
            title: "AA Batteries",
            keyword: "battery, batteries, charge",
            url: "options/noun_Battery_57587.png",
            content: "AA Batteries with lightning bolt"
        },
        {
            title: "AA Batteries",
            keyword: "battery, batteries, charge",
            url: "options/noun_Battery_57587.png",
            content: "AA Batteries with lightning bolt"
        },
        {
            title: "AA Batteries",
            keyword: "battery, batteries, charge",
            url: "options/noun_Battery_57587.png",
            content: "AA Batteries with lightning bolt"
        },
        {
            title: "AA Batteries",
            keyword: "battery, batteries, charge",
            url: "options/noun_Battery_57587.png",
            content: "AA Batteries with lightning bolt"
        },
        {
            title: "AA Batteries",
            keyword: "battery, batteries, charge",
            url: "options/noun_Battery_57587.png",
            content: "AA Batteries with lightning bolt"
        },
        {
            title: "AA Batteries",
            keyword: "battery, batteries, charge",
            url: "options/noun_Battery_57587.png",
            content: "AA Batteries with lightning bolt"
        },
        {
            title: "AA Batteries",
            keyword: "battery, batteries, charge",
            url: "options/noun_Battery_57587.png",
            content: "AA Batteries with lightning bolt"
        },
        {
            title: "AA Batteries",
            keyword: "battery, batteries, charge",
            url: "options/noun_Battery_57587.png",
            content: "AA Batteries with lightning bolt"
        },
        {
            title: "AA Batteries",
            keyword: "battery, batteries, charge",
            url: "options/noun_Battery_57587.png",
            content: "AA Batteries with lightning bolt"
        }
    ];    

	//
	// Methods
	//

	/**
	 * Create the HTML for each result
	 * @param  {Object} article The article
	 * @param  {Number} id      The result index
	 * @return {String}         The markup
	 */
	var createHTML = function (article, id) {
        var html =
        '<div class="results">' +
            '<div id="search-result-' + id + '">' +
                '<a href="' + article.url + '">' +
                    '<h2 class="searchResults">' + article.title + '</h2>' +
                     '<p style="margin-top:0px;margin-bottom:0px;">' + article.content + '</p>' +
                    article.url + '<br>' +
                    '<img style="text-align:left;padding-top:10px;padding-bottom:10px;" src="'+ article.img + '"/>' +
                '</a>' + '</div>' +
			'</div>';
		return html;
	};

	/**
	 * Create the markup when no results are found
	 * @return {String} The markup
	 */
	var createNoResultsHTML = function () {
		return '<p>Sorry, no matches were found.</p>';
	};

	/**
	 * Create the markup for results
	 * @param  {Array} results The results to display
	 * @return {String}        The results HTML
	 */
	var createResultsHTML = function (results) {
		var html = '<p>Found ' + results.length + ' matching articles</p>';
		html += results.map(function (article, index) {
			return createHTML(article, index);
		}).join('');
		return html;
	};

	/**
	 * Search for matches
	 * @param  {String} query The term to search for
	 */
	var search = function (query) {

		// Variables
		var reg = new RegExp(query, 'gi');
		var priority1 = [];
        var priority2 = [];
        var priority3 = [];

		// Search the content
		searchIndex.forEach(function (article) {
			if (reg.test(article.title)) return priority1.push(article);
            if (reg.test(article.keyword)) priority2.push(article);
            if (reg.test(article.content)) priority3.push(article);
		});

		// Combine the results into a single array
		var results = [].concat(priority1, priority2, priority3);

		// Display the results
		resultList.innerHTML = results.length < 1 ? createNoResultsHTML() : createResultsHTML(results);

	};

	/**
	 * Handle submit events
	 */
	var submitHandler = function (event) {
		event.preventDefault();
		search(input.value);
	};

	/**
	 * Remove site: from the input
	 */
	var clearInput = function () {
		input.value = input.value.replace(' site:optionsIcons/', '');
	};


	//
	// Inits & Event Listeners
	//

	// Make sure required content exists
	if (!form || !input || !resultList || !searchIndex) return;

	// Clear the input field
	clearInput();

	// Create a submit handler
    form.addEventListener('submit', submitHandler, false);
})(window, document);
