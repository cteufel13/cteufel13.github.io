import Header from '../header.jsx';
import Footer from '../footer.jsx';

import spd from '../assets/SPD.png'
import Clustered from './projectassets/clusteredps500.png'
import ClusteredDrawdowns from './projectassets/clusteredDrawdowns.png'
import ROCCurve from './projectassets/ROCCurve.png'
import FinalResults from './projectassets/FinalResults.png'

const SPD = () => {

    return (
        <div>
            <Header> </Header>
            <div className='flex flex-col my-20 mx-20'>
                <div className=' w-full font-[Manrope] text-[34px] leading-[41px] text-[rgb(43,43,43)] py-10 border-b-1 border-b-gray-100'>
                    Financial Regime Clustering
                </div>
                <div className='w-full flex flex-row pt-30 pb-5 ' >
                    <div className='w-2/5 pt-10'>
                        <img src={spd} alt="Rasperry PI Model 4" className='w-19/20 rounded-2xl'></img>
                    </div>
                    <div className="w-full p-10 font-[Manrope] flex flex-col gap-4 leading-relaxed">
                        <h1 className="text-2xl font-medium mb-4">
                            Financial Regime Clustering - An ML Approach
                        </h1>
                        <p className='mb-10 text-[rgb(43,43,43)]'>
                            A Python framework for regime-based portfolio classification and backtesting, reproducing the methodology from <em>Enhancing Portfolio Efficiency (Thomson, 2025)</em>. Combines macroeconomic and market-derived features with unsupervised clustering to label durable vs. fragile regimes, trains predictive classifiers, and evaluates dynamic allocation strategies against static benchmarks. Includes modular production code, interactive Jupyter notebooks, and visualization tools for end-to-end experimentation and analysis.
                        </p>

                        <div className='flex flex-row  '>
                            <p className="mb-2 w-3/8 text-[rgb(43,43,43)]">Tech Stack:</p><p className=' text-[rgb(51,51,51)]'>Python 3, pandas, NumPy, scikit-learn, yfinance, ALFRED API</p>
                        </div>
                        <div className='flex flex-row  ' >
                            <p className="mb-2 w-3/8  text-[rgb(43,43,43)]">Platforms:</p><p className=' text-[rgb(51,51,51)]'>Cross-platform (tested on Ubuntu/Debian, macOS, Windows) </p>
                        </div>
                        <div className='flex flex-row '>
                            <p className="mb-2 w-3/8 text-[rgb(43,43,43)]">License:</p><p className=' text-[rgb(51,51,51)]'>MIT</p>
                        </div>
                        <div className='flex flex-row'>
                            <p className="mb-2 w-3/8 text-[rgb(43,43,43)]">Link:</p><a href='https://github.com/cteufel13/regimeclustering' className=' text-[rgb(51,51,51)] hover:text-[rgb(150,150,150)]'>Financial  Regime Clustering</a>

                        </div>



                    </div>
                </div>
                <div className='flex flex-col font-[Manrope] text-[24px] mt-10 '>

                    <p className='border-b border-gray-100 pb-5'> Pipeline: </p>

                    <div className='flex flex-row font-[Manrope] justify-between w-full mt-10 border-b border-gray-100 pb-10 '>

                        <div className='w-3/5 text-[16px] leading-[24px] font-normal text-[rgb(43,43,43)] '>
                            Retrieving Data

                        </div>
                        <div className='w-1/2 text-[16px] leading-[24px] text-[#585858]'>
                            <div className=" space-y-3">
                                <p>
                                    The first step in the pipeline is the data retrieval. Here we are going to be selecting features
                                    based on macroeconomic importance similar to the paper mentioned. For this project I selected
                                    the following features:
                                </p>
                                <ul className=" grid grid-cols-1 sm:grid-cols-2 list-inside space-y-1 py-5 text-[#666] ">
                                    <li>Unemployment Rate (<em>UNRATE</em>)</li>
                                    <li>Consumer Price Inflation (<em>CPIAUCSL</em>)</li>
                                    <li>Consumer Sentiment (<em>UMCSENT</em>)</li>
                                    <li>10 Year Treasure Bonds (<em>GS10</em>)</li>
                                    <li>Industrial Production (<em>INDPRO</em>)</li>
                                    <li>Housing Starts (<em>HOUST</em>)</li>
                                    <li>Federal Funds Rate (<em>FEDFUNDS</em>)</li>
                                    <li>Dollar Index (<em>TWEXBGSMTH</em>)</li>
                                    <li>Gold Futures Price</li>
                                </ul>
                                <p>
                                    Additionally, We use the SP500 daily-ohlcv data and use it to aggregate to monthly features.
                                    For the time period based features, I used different timescales (short,medium,long) and applied them for each:
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 list-inside space-y-1 pt-5 text-[#666]">
                                    <li>Returns</li>
                                    <li>Average Returns</li>
                                    <li>Realized Volatility</li>
                                    <li>Drawdown</li>
                                    <li>Max Drawdown</li>
                                    <li>Average Intraday range</li>
                                    <li> RSI </li>
                                    <li> MACD</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-row font-[Manrope] justify-between w-full mt-10 border-b border-gray-100 pb-10 '>
                        <div className='w-3/5 text-[16px] leading-[24px] font-normal text-[rgb(43,43,43)] '>
                            Clustering
                        </div>
                        <div className='w-1/2 text-[16px] leading-[24px] text-[#585858]'>
                            <div className=" space-y-3">
                                <p>
                                    After preparing the timeseries data properly, i.e. making sure that there is no overflow and it is causal, we can train a clusterer on it.
                                    This clusterer could be anything but some have more benefits than others. <br /> <br />
                                    K-Means, one of the most standard and classic clustering algorithm, has the one caveat, that you have to predetermine the amount of clusters before hand, but the idea in the paper was to not have to make that distinction.<br /><br />
                                    This is why I opted to go for other algorithms, like Agglomerative or density-based clustering (DBScan).
                                    DBSCAN groups points that are closely packed together based on a maximum distance (eps) and a minimum number of neighbors, and it stops expanding a cluster when no more nearby points meet those criteria, leaving sparse points marked as noise. The following image, is the different months of the SP500 color coded by their clusters. <br /><br />
                                </p>
                                <img src={Clustered} />
                                <p className='text-center'> Colored Clusters overlapped on SP500</p>
                                <img src={ClusteredDrawdowns} />
                                <p className='text-center'> Colored Clusters over Drawdowns</p>

                            </div>

                        </div>
                    </div>
                    <div className='flex flex-row font-[Manrope] justify-between w-full mt-10 border-b border-gray-100 pb-10 '>
                        <div className='w-3/5 text-[16px] leading-[24px] font-normal text-[rgb(43,43,43)] '>
                            Classification
                        </div>
                        <div className='w-1/2 text-[16px] leading-[24px] text-[#585858]'>
                            <div className=" space-y-3">
                                <p>
                                    First step is to split the training data. For this I will take all the values before 04-2015 as training data and everything afterwards is the training data. <br />
                                    To make sure that both classes are represented equally, we will use Minority Oversampling (SMOTE), to apply noise to the classes and therefore add unique training data. <br />
                                    The final part is actually training the classifier. For this my first choise was XGBoost, a gradient boosting tree model, because of my long usaged and positive experiences with the model.
                                </p>
                                <img src={ROCCurve} className='w-1/2 mx-auto' />
                                <p className='text-center'> ROC Curve of XGB Classifier</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row font-[Manrope] justify-between w-full mt-10 border-b border-gray-100 pb-10 '>
                        <div className='w-3/5 text-[16px] leading-[24px] font-normal text-[rgb(43,43,43)] '>
                            Evaluation
                        </div>
                        <div className='w-1/2 text-[16px] leading-[24px] text-[#585858]'>
                            <div className=" space-y-3">
                                <p>
                                    The final step is the evaluation, to answer the "Does this have an effect?".
                                    For this the setup, like the paper, is to use a combination of bonds and ETFs and redistribute, based on the predicted performance by our classifier.
                                    Here I saw similar results to the paper that an equity only portfolio performs better than the bonds (speaking in returns).
                                    The ETFs used, were determined by their stability and growth even during unstable times:

                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 list-inside space-y-1 pt-5 text-[#666]">
                                    <li>Russell 1000 ETF</li>
                                    <li>MSCI USA Momentum Factor ETF</li>
                                    <li>MSCI USA Quality Factor ETF</li>
                                    <li>U.S. Small-Cap Equity Factor ETF</li>
                                    <li>Total International Stock ETF</li>
                                    <li>MSCI International Momentum Factor ETF</li>
                                    <li>MSCI International Quality Factor ETF</li>
                                    <li>USA Minimum Volatility Factor ETF</li>
                                    <li>U.S. Utilities ETF</li>
                                    <li>Consumer Staples ETF</li>
                                    <li>MSCI EAFE Minimum Volatility Factor ETF</li>
                                    <li>Global Consumer Staples ETF</li>
                                    <li>Global Utilities ETF</li>
                                    <li>Gold Futures</li>
                                </ul>
                                <p>
                                    The final results can be seen in the following image: After redistributing between fragile and durable allocations, the portfolio tends to perform better than the MSCI All World ETF.  <br />
                                    Despite this being an inherently great result, I believe the paper authors have twisted their results by comparing largly US weighted ETFs with a large all world ETF. This is a bit wrong in my opinion, since the growth of the AW tends to underperform the SPY in returns during durable times.<br />
                                    This is why I decided to plot agains the SPY as well. <br />
                                    Additionally the results of the classification are shown on the bottom. The classifier tends to get the more extreme results correct, while the transitions are often less accurate.
                                </p>
                                <img src={FinalResults} />
                                <p className='text-center'> Final Results of Project</p>

                            </div>
                        </div>
                    </div>


                </div>



            </div>

            <Footer></Footer>
        </div>
    )
};

export default SPD