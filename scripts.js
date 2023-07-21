function showArticle(ingredient) {
    const article = document.getElementById('ingredientArticle');
    article.innerHTML = getContent(ingredient);
    article.style.display = 'block';
}

function getContent(ingredient) {
    switch (ingredient) {
        case 'mate':
            return `
            <h2>Yerba Mate Loose Leaf Tea</h2>
            <p>Yerba mate; Pronounced ʝeɾβa ma-te; is a species of holly genus Ilex native to South America. The leaves of this plant are picked, sorted, roasted, crushed and are optionally smoked for additional flavor. The leaves can then be steeped in water to make a highly caffienated tea. Brewed hot it is called mate. Brewed cold it can be used to make tereré. For use in soda, it may be brewed or extracted for usage in a soda syrup. First time trying our soda? Bet you never knew that raw mate tea is extremely bitter!</p>
            `;
        case 'agavenectar':
            return `
            <h2>Agave Nectar</h2>
            <p>Agave nectar is a sweetener produced from several different species of agave including Agave tequilana and Agave salmiana. We're using this as a substitute to all that nasty sugar. When used in the soda syrup, it helps mellow out the bitterness, but still helps the mate tea stay true to its roots. </p>
            `;
        case 'citrus':
            return `
            <h2>Citrus</h2>
            <p>We all know what citrus is! Lemons, Limes, Oranges! They're all fair game here. We're using citric acid in ours to mellow out the sweetness, but, no one's asking...<p/>
            `;
        case 'ginger':
            return `
            <h2>Ginger</h2>
            <p>Ginger is a flowering plant of genus Zingiber. The root is widely used as a spice and as a folk medicine. While characterized as a fragrant spice, it's known for its juicy and spicy taste. Who doesn't want a little kick to their drink?</p>
            `;
        default:
            return '';
    }
}