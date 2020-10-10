import React from 'react';
import ChartsJS from '../ChartsJS/ChartsJS';
import D3JS from '../D3JS/D3JS';

function HomePage() {
  return (
    <main role="main" className="container center">

        <section className="page-area">

            <article>
                <h3>Stay on track</h3>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
    
            <article>
                <h3>Alerts</h3>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
    
            <article>
                <h3>Results</h3>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
    
            <article>
                <h3>Free</h3>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
            </article>
    
            <article>
                <h3>Stay on track</h3>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
    
            <article>
                <h3>Alerts</h3>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
    
            <article>
                <h3>Results</h3>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
    
            <article>
                <h3>Free</h3>
                <ChartsJS/>
            </article>

        </section>
        <section className="donut">
            <h2>Budget chart donutified</h2>
            <D3JS/>
        </section>  

    </main>
  );
}

export default HomePage;