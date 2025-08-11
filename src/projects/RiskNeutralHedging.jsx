import Header from '../header.jsx';
import Footer from '../footer.jsx';

import Chains from '../assets/RiskNeutralHedging.png'
import BinomialDH from './projectassets/BinomDH.png'
import RealDH from './projectassets/RealDH.png'
import MultiGreekH from './projectassets/MultiGreekH.png'

import 'katex/dist/katex.min.css';

import { BlockMath } from 'react-katex';


const RiskNeutralHedging = () => {


    return (
        <div>
            <Header></Header>
            <div className='flex flex-col my-20 mx-20'>
                <div className=' w-full font-[Manrope] text-[34px] leading-[41px] text-[rgb(43,43,43)] py-10 border-b-1 border-b-gray-100'> Risk Neutral Hedging </div>
                <div className='w-full flex flex-row pt-30 pb-5' >
                    <div className='w-1/3 pt-10'>
                        <img src={Chains} alt="Option Chains Image" className='w-19/20  h-18/20 rounded-2xl object-cover'></img>
                    </div>
                    <div className="w-full p-10 font-[Manrope] flex flex-col gap-4 leading-relaxed">
                        <h1 className="text-2xl font-medium mb-4">
                            Risk Neutral Hedging - Delta,Gamma,Vega +
                        </h1>
                        <p className='mb-10 text-[rgb(43,43,43)]'>
                            A personal deep dive I did into option risk management, starting with a simple two-step binomial Δ-hedging example, then moving to Black–Scholes–Merton to get implied vols and full Greeks, and finally building a daily-rebalanced Δ-Γ-Vega neutral portfolio. I wrote my own tools for IV solving, Greek calculations, data cleaning, and hedge simulation, and put together Jupyter notebooks and visuals to tie it all together for analysis and backtesting.
                        </p>
                        <div className='flex flex-row text '>
                            <h2 className="mb-2 w-3/8">Features</h2>
                            <ul className="space-y-1 list-none text-[rgb(51,51,51)]">
                                <li>Binomial Model: Two-step Δ-hedging under no-arbitrage</li>
                                <li>Black–Scholes Analysis: Implied vols, Δ, Γ, Vega, Θ, ρ from market data</li>
                                <li>Multi-Greek Hedging: Daily Δ-Γ-Vega neutral portfolio rebalancing</li>
                                <li>Volatility Surface: Extraction, smoothing, and analysis</li>
                                <li>Data Utilities: Cleaning, interpolation, hedge simulation</li>
                            </ul>
                        </div>
                        <div className='flex flex-row '>
                            <p className="mb-2 w-3/8 text-[rgb(43,43,43)]">Tech Stack:</p>
                            <p className='text-[rgb(51,51,51)]'>Python, NumPy, pandas, matplotlib</p>
                        </div>

                        <div className='flex flex-row '>
                            <p className="mb-2 w-3/8 text-[rgb(43,43,43)]">License:</p>
                            <p className='text-[rgb(51,51,51)]'>MIT</p>
                        </div>
                        <div className='flex flex-row'>
                            <p className="mb-2 w-3/8 text-[rgb(43,43,43)]">Link:</p>
                            <a href='https://github.com/cteufel13/risk-neutral-hedging' className='text-[rgb(51,51,51)] hover:text-[rgb(150,150,150)]'>
                                Delta Hedging Project
                            </a>
                        </div>

                    </div>
                </div>
                <div className='flex flex-col font-[Manrope] text-[24px] mt-10 '>
                    <p className='border-b border-gray-100 pb-5'> Components: </p>
                    <div className='flex flex-row font-[Manrope] justify-between w-full mt-10 border-b border-gray-100 pb-10 '>
                        <div className='w-3/5 text-[16px] leading-[24px] font-normal text-[rgb(43,43,43)] '>
                            Binomial Model
                        </div>
                        <div className='w-1/2 text-[16px] leading-[24px] text-[#585858]'>
                            <div className=" space-y-3">
                                The Binomial Model is the most basic model that can be used to model asset movement. It assumes that an asse has a probability it can move up or down by a fixed amount each time step.
                                It is very unrealistic for a large amount of reasons but is quite useful to understand Delta Hedging. The underlying stock movement ressembles geometric brownian motion.
                                <br /> <br />
                                <em>Background on option valuation: </em><br />
                                The value of the options in this model is derived from a portfolio of the option and a short position on the underlying, and under the no-arbitrage condition, by shorting a fraction of the underlying, the option’s value equals the discounted expected payoff in the risk-neutral world obtained from the replicating portfolio.
                                <br /><br />
                                This replicating-portfolio idea is the basis of <em>delta hedging</em>, where the “fraction” of the underlying we short (or hold long) corresponds to the option’s delta, adjusting continuously to offset price movements and maintain a risk-free position. <br />
                                <br /><br />
                                The Delta in this model is defined as the following:<br />
                                <BlockMath math="\Delta = \frac{V^{+}-V^{-}}{(u-v)S}" />
                                <br /> <br />
                                By rebalancing each time step, you can effectively neutralize your portfolio (consisting of an optiona and the shorted stock) to the movement of the stock. The result of all this can be seen here:
                                <img src={BinomialDH} />

                            </div>
                        </div>

                    </div>
                    <div className='flex flex-row font-[Manrope] justify-between w-full mt-10 border-b border-gray-100 pb-10 '>
                        <div className='w-3/5 text-[16px] leading-[24px] font-normal text-[rgb(43,43,43)] '>
                            Real World Delta Hedging
                        </div>
                        <div className='w-1/2 text-[16px] leading-[24px] text-[#585858]'>
                            <div className=" space-y-3">
                                The most basic way to model an option price is the Black–Scholes equation. It is one of the most classic equations in all of economics. The option value of a european call/put option is modelled by these equations: <br /><br />
                                <BlockMath math={`\\frac{\\partial V}{\\partial t} + \\frac{1}{2} \\sigma^2 S^2 \\frac{\\partial^2 V}{\\partial S^2} + r S \\frac{\\partial V}{\\partial S} - rV = 0`} /> <br />
                                Similar to before we want to find the deltas (and other greeks) at each time point. The Delta, as discussed before, is the options sensitivity to price changes of the underlying asset. <br />
                                The delta being the first order sensitivity has a closed form solution for this most basic model. It is given by the following: <br /><br />
                                <BlockMath math={`\\Delta = \\frac{\\partial V}{\\partial S} = N(d_1)`} />.
                            </div>
                            <div>
                                For this project I longed a call option and shorter the underlying asset, in this case ES-Mini Futures. At each time point (daily), the delta is calculated and the portfolio rebalanced.
                                Unlike the binomial model, this asset movement is unpredictable (or very, very hard), and may move more or less than the delta (exposure to gamma), leading to balance issues and the portfolio not being perfectly neutral.  <br />
                                <img src={RealDH} />
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-row font-[Manrope] justify-between w-full mt-10 border-b border-gray-100 pb-10 '>
                        <div className='w-3/5 text-[16px] leading-[24px] font-normal text-[rgb(43,43,43)] '>
                            Multi-Greek Hedging
                        </div>
                        <div className='w-1/2 text-[16px] leading-[24px] text-[#585858]'>
                            <div className=" space-y-3">
                                An Option has more sensitivities than just to asset price movement. The group of these values is called the greeks.
                                The other greeks are gamma (second order sens.), vega (sens. to volatility), theta (sens. to time decay), rho (sens. to interest rate). They are given by the following:
                                <BlockMath math={`\\Gamma = \\frac{\\partial^2 V}{\\partial S^2} = \\frac{\\varphi(d_1)}{S\\sigma\\sqrt{T}}`} />

                                <BlockMath math={`\\nu = \\frac{\\partial V}{\\partial \\sigma} = S\\,\\varphi(d_1)\\sqrt{T}`} />
                                <BlockMath math={`\\Theta_c = \\frac{\\partial V_c}{\\partial t} = -\\frac{S\\,\\varphi(d_1)\\sigma}{2\\sqrt{T}} - rKe^{-rT}N(d_2)`} />

                                <BlockMath math={`\\rho_c = \\frac{\\partial V_c}{\\partial r} = KT e^{-rT} N(d_2)`} />
                                <br />
                                You can alos hedge against these greeks. This time, however, you can't use the underlying (since it has a delta of 1 but 0 of all other greeks), so you have to use options instead.
                                So by choosing a handfull of options (5+) and solving a system of equations, one can solve that balance equation once again.

                                <BlockMath math={`\\text{Let }\\mathbf{g}^{(i)}=\\begin{bmatrix}\\Delta_i\\\\\\Gamma_i\\\\\\nu_i\\\\\\Theta_i\\\\\\rho_i\\end{bmatrix},\\ i=1,\\dots,n,\\quad\\mathbf{g}^{(0)}=\\begin{bmatrix}\\Delta_0\\\\\\Gamma_0\\\\\\nu_0\\\\\\Theta_0\\\\\\rho_0\\end{bmatrix}.`} />
                                <BlockMath math={`\\mathbf{G}=[\\mathbf{g}^{(1)}\\ \\cdots\\ \\mathbf{g}^{(n)}],\\quad
\\mathbf{w}=\\begin{bmatrix}w_1&\\cdots&w_n\\end{bmatrix}^{\\!\\top}.`} />

                                <BlockMath math={`\\text{Hedge by solving}\\quad \\mathbf{G}\\,\\mathbf{w}=-\\mathbf{g}^{(0)}.`} />

                                Theoretically, if you could hedge in continous time, it should result in a perfectly neutral portfolio. Due to this just being a model, however, inaccuracies, noise and only hedging in discrete intervals result in this not being perfectly risk neutral. The results of such a rebalancing and of this project can be seen here:

                                <img src={MultiGreekH} />


                            </div>
                        </div>
                    </div>


                </div>

            </div>


            <Footer></Footer>
        </div>
    )
};

export default RiskNeutralHedging;