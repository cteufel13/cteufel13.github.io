import Header from '../header.jsx';
import Footer from '../footer.jsx';

import rp4b from '../assets/RP4B.png'

import CodeBlock from './utils.jsx';

const RP4B = () => {
    return (
        <div>
            <Header></Header>

            <div className='flex flex-col my-20 mx-20'>
                <div className=' w-full font-[Manrope] text-[34px] leading-[41px] text-[rgb(43,43,43)] py-10 border-b-1 border-b-gray-100'> RP4B </div>
                <div className='w-full flex flex-row pt-30 pb-5' >
                    <div className='w-1/3 pt-10'>
                        <img src={rp4b} alt="Rasperry PI Model 4" className='w-19/20 rounded-2xl'></img>

                    </div>
                    <div className="w-full p-10 font-[Manrope] flex flex-col gap-4 leading-relaxed">
                        <h1 className="text-2xl font-medium mb-4">
                            Raspberry Pi 4B – Strawberry Trading
                        </h1>
                        <p className='mb-10 text-[rgb(43,43,43)]'>
                            A C++20 modular platform for equities and options strategy development
                            using the Alpaca API. Alpaca API was partially reimplemented in C++ and
                            is being progressively updated as strategy development needs evolve.
                        </p>

                        <div className='flex flex-row text '>
                            <h2 className="mb-2 w-3/8">Features</h2>
                            <ul className="space-y-1 list-none text-[rgb(51,51,51)]">
                                <li>Options Trading: Real-time options chain, Greeks, IV analysis</li>
                                <li>Market Data: Live &amp; historical stock/options data</li>
                                <li>Order Management: Multiple order types, TIF options, tracking</li>
                                <li>Risk Management: Portfolio, P&amp;L, risk metrics</li>
                                <li>Modular Architecture: API, core logic, logging, scheduler, strategies</li>
                            </ul>
                        </div>
                        <div className='flex flex-row '>
                            <p className="mb-2 w-3/8 text-[rgb(43,43,43)]">Tech Stack:</p><p className='text-[rgb(51,51,51)]'>CMake, libcurl, nlohmann/json</p>
                        </div>
                        <div className='flex flex-row ' >
                            <p className="mb-2 w-3/8 text-[rgb(43,43,43)]">Platforms:</p><p className='text-[rgb(51,51,51)]'>Ubuntu/Debian, macOS</p>
                        </div>
                        <div className='flex flex-row '>
                            <p className="mb-2 w-3/8 text-[rgb(43,43,43)]">License:</p><p className='text-[rgb(51,51,51)]'>MIT</p>
                        </div>
                        <div className='flex flex-row'>
                            <p className="mb-2 w-3/8 text-[rgb(43,43,43)]">Link:</p><a href='https://github.com/cteufel13/RP4B' className=' text-[rgb(51,51,51)] hover:text-[rgb(150,150,150)]'> RP4B - Strawberry Trading</a>

                        </div>



                    </div>

                </div>
                <div className='w-full font-[Manrope] flex flex-col gap-4'>
                    <p className='text-2xl mb-4 '> Market Interface</p>
                    <p className='text-[rgb(43,43,43)]'>  This is the main interface between the strategies and the Alpaca Market API. It brings together the individual data and trading clients for options and equities respectively.
                        These clients were implemented using curl library to make HTTP requests (mainly GET requests for data and POST requests for sending orders). All the necessary top level functions were reimplemented and combined with a logger to keep track of issues and events happening.  The main focus of my first implementation (Delta Hedging), was Options trading,  which is why so many of the implementations here are Options and Options chains related.


                    </p>
                    <div className='mt-20 leading-relaxed flex rounded-lg h-[80vh] overflow-scroll justify-center'>
                        <CodeBlock
                            language="cpp"
                            code={`#pragma once
#include <api/market_data_client.hpp>
#include <api/option_data_client.hpp>
#include <api/trading_client.hpp>
#include <common/optionchain.hpp>
#include <common/option.hpp>
#include <common/position.hpp>
#include <common/timeseries.hpp>
#include <utils/json.hpp>
#include <utils/position_utils.hpp>
#include <utils/timeseries_utils.hpp>
#include <utils/option_utils.hpp>

#include <string>

class MarketInterface
{
public:
    MarketInterface();
    // Trading:
    bool order(std::string symbol,
               float qty = 1.0,
               std::optional<float> notional = std::nullopt,
               OrderSide side = OrderSide::BUY,
               OrderType type = OrderType::MARKET,
               TimeInForce time_in_force = TimeInForce::DAY,
               OrderClass orderclass = OrderClass::SIMPLE,
               bool extended_hours = false); // handles interaction with Order Class
    std::vector<Position> getAllPositions();
    Position getOpenPosition(const std::string &symbol_or_asset_id);
    void closeAllPositions();
    void closePosition(const std::string &symbol_or_asset_id);
    TimeSeries getPortfolioHistory();
    std::vector<Option> getOptionContracts(std::vector<std::string> underlying_symbols,
                                           AssetStatus status = AssetStatus::ACTIVE,
                                           Date expiration_date = (Date::now() + std::chrono::days{5}),
                                           std::optional<Date> expiration_date_gte = std::nullopt,
                                           std::optional<Date> expiration_date_lte = std::nullopt,
                                           std::optional<std::string> root_symbol = std::nullopt,
                                           ContractType type = ContractType::CALL,
                                           ExerciseStyle style = ExerciseStyle::AMERICAN,
                                           std::optional<std::string> strike_price_gte = std::nullopt,
                                           std::optional<std::string> strike_price_lte = std::nullopt,
                                           std::optional<int> limit = std::nullopt);
    Option getOptionContract(const std::string &symbol_asset_id);

    // Market Data:
    std::vector<TimeSeries> requestStockBars(std::vector<std::string> symbols,
                                             TimeFrame tframe = TimeFrame(15, TimeFrameUnit::Minute),
                                             Date start = Date::now() - std::chrono::days{1},
                                             std::optional<Date> end = std::nullopt,
                                             int limit = 100); // handles Interaction with StockBarsRequest Class
    std::vector<TimeSeriesPoint> requestStockBarsLatest(const std::vector<std::string> &symbols);
    std::vector<TimeSeries> requestOptionBars(std::vector<std::string> symbols,
                                              TimeFrame tframe,
                                              std::optional<std::string> start = std::nullopt,
                                              std::optional<std::string> end = std::nullopt,
                                              std::optional<int> limit = std::nullopt);
    std::vector<TimeSeriesPoint> requestOptionBarsLatest(const std::vector<std::string> &options);
    OptionChain requestOptionChains(
        std::string underlying_symbol,
        std::optional<ContractType> type = std::nullopt,
        std::optional<double> strike_price_gte = std::nullopt,
        std::optional<double> strike_price_lte = std::nullopt,
        std::optional<std::string> expiration_date = std::nullopt,
        std::optional<std::string> expiration_date_gte = std::nullopt,
        std::optional<std::string> expiration_date_lte = std::nullopt,
        std::optional<std::string> root_symbol = std::nullopt,
        std::optional<std::chrono::system_clock::time_point> updated_since = std::nullopt,
        std::string feed = "indicative",
        int limit = 1000);

    // Other Data:
    std::vector<float> getGreeks(OptionChain &optchain);
    std::vector<float> getDeltas(OptionChain &optchain);
    std::vector<float> getGammas(OptionChain &optchain);
    std::vector<float> getVegas(OptionChain &optchain);
    std::vector<float> getRhos(OptionChain &optchain);
    std::vector<float> getThetas(OptionChain &optchain);

private:
    TradingClient trading_client;
    OptionClient option_client;
    MarketClient market_client;
};`}
                        />
                    </div>


                </div>
            </div>

            <Footer></Footer>
        </div>

    )
};


export default RP4B;