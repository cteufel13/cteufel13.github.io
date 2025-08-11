import Header from '../header.jsx';
import Footer from '../footer.jsx';

import acedb from '../assets/acedb.png'
import CodeBlock from './utils.jsx';


const AceDB = () => {
    return (<div>
        <Header></Header>
        <div className='flex flex-col my-20 mx-20'>
            <div className=' w-full font-[Manrope] text-[34px] leading-[41px] text-[rgb(43,43,43)] py-10 border-b-1 border-b-gray-100'> AceDB </div>
            <div className='w-full flex flex-row pt-30 pb-5' >
                <div className='w-1/3 pt-10'>
                    <img src={acedb} alt="AceDB Image" className='w-19/20  h-18/20 rounded-2xl object-cover'></img>
                </div>
                <div className="w-full p-10 font-[Manrope] flex flex-col gap-4 leading-relaxed">
                    <h1 className="text-2xl font-medium mb-4">
                        AcedDB - A PostgresDB Wrapper/Library
                    </h1>
                    <p className='mb-10 text-[rgb(43,43,43)]'>
                        A Python wrapper for PostgreSQL that streamlines financial data collection and analysis for the Analytics Club at ETH (ACE).
                        Integrates with Databento and FRED APIs to fetch, store, and manage historical market data in a structured database, enabling efficient querying, retrieval, and analytics.
                        Supports automated ingestion, flexible schema management, and both conventional and planned custom data sources (e.g., news, crypto).
                        Designed for reproducible, scalable market research with minimal setup.
                    </p>
                    <div className='flex flex-row text '>
                        <h2 className="mb-2 w-3/8">Features</h2>
                        <ul className="space-y-1 list-none text-[rgb(51,51,51)]">
                            <li> Seamless integration with Databento API</li>
                            <li> Integration with FRED API</li>
                            <li> Automated data fetching and storage</li>
                            <li> PostgreSQL database management</li>
                            <li> Historical data storage and retrieval</li>

                        </ul>
                    </div>
                    <div className='flex flex-row '>
                        <p className="mb-2 w-3/8 text-[rgb(43,43,43)]">Tech Stack:</p>
                        <p className='text-[rgb(51,51,51)]'>Python, PostgreSQL, Databento API, FRED API</p>
                    </div>
                    <div className='flex flex-row '>
                        <p className="mb-2 w-3/8 text-[rgb(43,43,43)]">Platforms:</p>
                        <p className='text-[rgb(51,51,51)]'>Ubuntu/Debian, macOS, Windows</p>
                    </div>
                    <div className='flex flex-row '>
                        <p className="mb-2 w-3/8 text-[rgb(43,43,43)]">License:</p>
                        <p className='text-[rgb(51,51,51)]'>MIT</p>
                    </div>
                    <div className='flex flex-row'>
                        <p className="mb-2 w-3/8 text-[rgb(43,43,43)]">Link:</p>
                        <a href='https://github.com/cteufel13/acedb' className='text-[rgb(51,51,51)] hover:text-[rgb(150,150,150)]'>ACEDB - Analytics Club ETH Database</a>
                    </div>
                </div>

            </div>
            <div className='w-full font-[Manrope] flex flex-col gap-4'>
                <p className='text-2xl mb-4 '> Features </p>

                <div className='flex flex-row font-[Manrope] justify-between w-full mt-10 border-b border-gray-100 pb-10 '>

                    <div className='w-3/5 text-[16px] leading-[24px] font-normal text-[rgb(43,43,43)] '>
                        Database
                    </div>
                    <div className='w-1/2 text-[16px] leading-[24px] text-[#585858]'>
                        <div className=" space-y-3">
                            <p>
                                The database itself is a PostgresSQL Database that is hosted somewhere remotely and can be accessed via an API.
                                For this project the database itself has 2 main components, the data component and the tracking component (they are separate schemas in the database but serving very independent purposes).
                                <br /> <br />

                            </p>
                            <div className='flex pl-20'>
                                <ul className='justify-center'>
                                    <li>Acedb/
                                        <ul className="pl-12">
                                            <li >XNAS.ITCH</li>
                                            <li> GLBX.MDP3 </li>
                                            <li> IFEU.IMPACT/
                                                <ul className="pl-12">
                                                    <li >ohlcv-1m</li>
                                                    <li> ohlcv-1h </li>
                                                    <li> bbo-1m</li>

                                                </ul>
                                            </li>

                                        </ul>
                                    </li>
                                    <li>
                                        <ul className="pl-12">
                                            <li >FRED/
                                                <ul className="pl-12">
                                                    <li >GDP</li>
                                                    <li> UNRATE </li>
                                                    <li> DGSM10</li>

                                                </ul>
                                            </li>

                                        </ul>
                                    </li>
                                </ul>


                            </div>
                            Here the Schemas are teh data sources as provided to Databento, such as Nasdaq ITCH and similar.
                            This broadly constrains the data to one type of asset (equities/futures/options/commodities).
                            Inside these schemas, the tables represent the different datastreams, as provided by databento. <br />
                            This can be candlestick data (ohlcv), best bid offer (bbo) or even more fine grained data like (mbo) data.<br />
                            Similar to this FRED is treated as a schema. it contains all of the data sourced from the FRED API. This can be vintages, time series, or other datatypes available.
                            These indices are treated as tables. <br /><br />

                            The second component is the tracking component.                                <br /> <br />

                            <div className='flex pl-20 '>
                                <ul className='justify-center'>
                                    <li>Acedb/
                                        <ul className="pl-6">
                                            <li>time/</li>
                                            <ul className="pl-6">
                                                <li>time_range</li>
                                            </ul>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            Here all changes to tables are stored. During execution when new data is gathered and inserted it is noted down here.
                            Before retrieving data, this table is first check to see if new data needs to be downloaded or if all request is already available in the table. <br />
                            This minimzes the needed data and therefore minimizes costs (we like that :) ).
                        </div>

                    </div>

                </div>
                <div className='flex flex-row font-[Manrope] justify-between w-full mt-10 border-b border-gray-100 pb-10 '>

                    <div className='w-3/5 text-[16px] leading-[24px] font-normal text-[rgb(43,43,43)] '>
                        API
                    </div>
                    <div className='w-1/2 text-[16px] leading-[24px] text-[#585858]'>
                        <div className=" space-y-3">
                            The API itself is one main class (AceDB), that contains multiple other clients to deal with specific tasks.
                            These are the following: <br /><br />
                            <div className='ml-10'>
                                <ol className='list-decimal'>
                                    <li>Databento Client</li>
                                    <li>Postgres Client</li>
                                    <li>FRED Client</li>
                                </ol>
                            </div>
                            <br />
                            The Datatbento client is a wrapper for the Databento api.
                            It deals with retrieving the data, schemata, columns and all necessary information that is needed to ensure the data is saved properly.<br /><br />
                            The Postgres client deals with all the interactions with the database, it uploads and saves that data ranging from a few entries to millions (if you are calling all options available for a specific range) doing this efficiently and cleanly.<br /><br />
                            The FRED client is very similar to the previous, making sure that the FRED data gets processed properly to load it into the database properly and retrieve it.<br /><br />

                            All of these functionalities get combined in the AceDB class, creating a clean interface between the Data APIs and the Database all while minimizing costs.






                        </div>
                    </div>
                </div>
                <p className='text-2xl mb-4 '> AceDB Class </p>
                <p className='text-[rgb(43,43,43)]'> This is the main class that brings all of the previous components together. It has all the key functions and abstractions and all the functionalities you could need. Feel free to scroll through (and also give feedback on the github page)</p>

                <div className='mt-20 leading-relaxed flex rounded-lg h-[80vh] overflow-scroll justify-center'>
                    <CodeBlock
                        language="python"
                        code={`from .config import Config
from typing import List, Dict, Any, Tuple
from collections import defaultdict
from dateutil import parser

import pandas as pd
from pathlib import Path
from datetime import datetime, timedelta, timezone
from tqdm import tqdm

from .dbnclient import DBNClient
from .fredclient import FREDClient
from .postgreclient import PostgreDBClient


class AceDB:

    def __init__(self):
        self._config = Config()
        self._databento_client = DBNClient()
        self._fred_client = FREDClient()
        self._database_client = PostgreDBClient(
            host=self._config.host,
            port=self._config.port,
            db_name=self._config.db_name,
            username=self._config.username,
            password=self._config.password,
        )

    def get_data(
        self,
        dataset: str,
        schemas: List[str] | str = None,
        symbols: List[str] | str = None,
        start: str = None,
        end: str = None,
        stype_in: str = "raw_symbol",
        stype_out: str = "instrument_id",
        use_databento: bool = True,
        download: bool = False,
        path: str = None,
        filetype: str = "csv",
        **kwargs,
    ):
        """
        Retrieve data from various sources based on the specified dataset.

        Parameters:
            dataset (str): The name of the dataset to retrieve data from.
            schemas (List[str] | str, optional): Schema names for Databento datasets.
            symbols (List[str] | str, optional): Symbol(s) to retrieve data for.
            start (str, optional): Start date/time for the data range.
            end (str, optional): End date/time for the data range.
            stype_in (str, optional): Input symbol type. Defaults to "raw_symbol".
            stype_out (str, optional): Output symbol type. Defaults to "instrument_id".
            use_databento (bool, optional): Whether to source missing data from Databento. Defaults to True.
            download (bool, optional): Whether to download the data to a file. Defaults to False.
            path (str, optional): Path to save the downloaded data.
            filetype (str, optional): File format for downloaded data. Defaults to "csv".
            **kwargs: Additional arguments to pass to the underlying methods.

        Returns:
            Dict: Retrieved data organized by schema/symbol.

        Raises:
            ValueError: If the dataset is not found.
        """

        start = parser.parse(start) if start else 0
        end = parser.parse(end) if end else None

        dataset_exists = self._check_dataset(dataset)
        if dataset_exists is None:
            raise ValueError(f"Dataset {dataset} not found")
        else:
            self._database_client._ensure_schema(sql_schema=dataset)

        if dataset_exists == "Databento":
            data = self.get_databento_data(
                dataset=dataset,
                schemas=schemas,
                symbols=symbols,
                start=start,
                end=end,
                stype_in=stype_in,
                stype_out=stype_out,
                use_databento=use_databento,
                download=download,
                path=path,
                filetype=filetype,
            )
            return data
        elif dataset_exists == "FRED":
            data = self.get_FRED_data(
                dataset=dataset,
                symbols=symbols,
                start=start,
                end=end,
                download=download,
                path=path,
                filetype=filetype,
            )
            return data
        pass

    def get_databento_data(
        self,
        dataset: str,
        schemas: List[str] | str,
        symbols: List[str] | str,
        start: str = None,
        end: str = None,
        stype_in: str = "raw_symbol",
        stype_out: str = "instrument_id",
        use_databento: bool = True,
        download: bool = False,
        path: str = None,
        filetype: str = "csv",
    ):
        """
        Retrieve data from Databento or local database based on specified parameters.

        Parameters:
            dataset (str): The dataset name from Databento.
            schemas (List[str] | str): Schema(s) for the Databento data.
            symbols (List[str] | str): Symbol(s) to retrieve data for.
            start (str, optional): Start date/time for the data range.
            end (str, optional): End date/time for the data range.
            stype_in (str, optional): Input symbol type. Defaults to "raw_symbol".
            stype_out (str, optional): Output symbol type. Defaults to "instrument_id".
            use_databento (bool, optional): Whether to source missing data from Databento. Defaults to True.
            download (bool, optional): Whether to download the data to a file. Defaults to False.
            path (str, optional): Path to save the downloaded data.
            filetype (str, optional): File format for downloaded data. Defaults to "csv".

        Returns:
            Dict: Data organized by schema, with each schema mapping to retrieved data.

        Raises:
            ValueError: If the provided schema is not found in Databento or if stype_in
                       is not 'parent' when using .OPT or .FUT symbols.
        """

        symbols = symbols if isinstance(symbols, list) else [symbols]
        schemas = schemas if isinstance(schemas, list) else [schemas]

        # Make sure all valid schemas are in the database
        for schema in schemas:
            if self._databento_client._validate_schema(dataset, schema):
                if not self._database_client._check_table_in_database(dataset, schema):
                    self._database_client._create_table(
                        sql_schema=dataset,
                        table_name=schema,
                        col_dict=self._databento_client._get_col_dict(schema),
                    )
            else:
                raise ValueError(f"Schema {schema} not found in Databento.")

        # Just retrieving form database
        if not use_databento:
            print("Not sourcing missing data from Databento.")

            symbols = self._databento_client._resolve_symbology(
                dataset=dataset,
                symbols=symbols,
                stype_in=stype_in,
                stype_out=stype_out,
                start_date=start,
                end_date=end,
            )
            results = self.retrieve_dbn_from_database(
                dataset=dataset,
                schemas=schemas,
                symbols=symbols,
                start=start,
                end=end,
            )
        # using databento
        else:
            # OPT FUT control flow
            if any(item.endswith((".OPT", ".FUT")) for item in symbols):
                if stype_in != "parent":
                    raise ValueError(
                        "If looking for .OPT or .FUT symbols, stype_in must be 'parent'."
                    )
                print("Just keeping .OPT and .FUT symbols.")
                symbols = [
                    symbol for symbol in symbols if symbol.endswith((".FUT", ".OPT"))
                ]
                results = {}

                for schema in schemas:
                    for symbol in symbols:
                        print(f"Processing symbol {symbol}...")
                        ranges = self._database_client.retrieve_ranges(
                            sql_schema=dataset, table_name=schema, symbol=symbol
                        )
                        missing_ranges = self._get_missing_ranges(
                            source_ranges=ranges,
                            requested_range=(start, end),
                        )
                        total_cost = self._databento_client._get_cost(
                            dataset=dataset,
                            symbol=symbol,
                            schema=schema,
                            ranges=missing_ranges,
                            stype_in=stype_in,
                        )
                        print(f"Cost of {total_cost} for {schema} and {symbol}.")
                        if total_cost > 0 and self._ask_yn(
                            f"Cost of {total_cost} for {schema} and {symbol}. Proceed? Type y or n and then press Enter: "
                        ):
                            data = self._databento_client.get_data(
                                dataset=dataset,
                                schema=schema,
                                symbol=symbol,
                                ranges=missing_ranges,
                                stype_in=stype_in,
                            )
                            self._database_client._insert_data(
                                sql_schema=dataset,
                                table_name=schema,
                                data=data,
                            )
                            self._database_client._append_ranges(
                                sql_schema=dataset,
                                table_name=schema,
                                symbol=symbol,
                                ranges=missing_ranges,
                            )
                        else:
                            print(f"Skipping {schema} and {symbol}.")
                            continue

                child_symbols = self._databento_client._resolve_symbology(
                    dataset=dataset,
                    symbols=symbols,
                    stype_in=stype_in,
                    stype_out=stype_out,
                    start_date=start,
                    end_date=end,
                )
                print(len(child_symbols))
                results = self.retrieve_dbn_from_database(
                    dataset=dataset,
                    schemas=schemas,
                    symbols=child_symbols,
                    start=start,
                    end=end,
                )

            # Standard symbol control flow
            else:

                results = {}
                for schema in schemas:
                    for symbol in symbols:
                        ranges = self._database_client.retrieve_ranges(
                            sql_schema=dataset, table_name=schema, symbol=symbol
                        )
                        missing_ranges = self._get_missing_ranges(
                            source_ranges=ranges,
                            requested_range=(start, end),
                        )
                        total_cost = self._databento_client._get_cost(
                            dataset=dataset,
                            symbol=symbol,
                            schema=schema,
                            ranges=missing_ranges,
                            stype_in=stype_in,
                        )
                        if total_cost > 0 and self._ask_yn(
                            f"Cost of {total_cost} for {schema} and {symbol}. Proceed? (y/n): "
                        ):
                            data = self._databento_client.get_data(
                                dataset=dataset,
                                schema=schema,
                                symbol=symbol,
                                ranges=missing_ranges,
                            )
                            self._database_client._insert_data(
                                sql_schema=dataset,
                                table_name=schema,
                                data=data,
                            )
                            self._database_client._append_ranges(
                                sql_schema=dataset,
                                table_name=schema,
                                symbol=symbol,
                                ranges=missing_ranges,
                            )
                        else:
                            print(f"Skipping {schema} and {symbol}.")
                            continue
                    results[schema] = self._database_client._retrieve_data(
                        sql_schema=dataset,
                        table_name=schema,
                        symbol=symbols,
                        start=start,
                        end=end,
                    )

        if download:
            self._download_data(
                results_dict=results,
                path=path,
                filetype=filetype,
            )

        return results

    def retrieve_dbn_from_database(self, dataset, schemas, symbols, start, end):
        """
        Retrieve data from the database for the given dataset, schemas, and symbols.

        Parameters:
            dataset (str): The name of the dataset.
            schemas (List[str] | str): Schema(s) to retrieve data from.
            symbols (List[str] | str): Symbol(s) to retrieve data for.
            start (str): Start date/time for the data range.
            end (str): End date/time for the data range.

        Returns:
            Dict: Retrieved data organized by schema.
        """

        schemas = schemas if isinstance(schemas, list) else [schemas]
        symbols = symbols if isinstance(symbols, list) else [symbols]
        results = {}

        if len(symbols) > 100:
            # more efficient querying for large symbol
            self._database_client._create_temp_symbols(
                table_name="temp_symbols", symbols=symbols
            )
            for schema in schemas:
                data = self._database_client._retrieve_temp_symbols(
                    sql_schema=dataset,
                    table_name=schema,
                    temp_table_name="temp_symbols",
                    start=start,
                    end=end,
                )
                results[schema] = data

        else:
            for schema in schemas:
                data = self._database_client._retrieve_data(
                    sql_schema=dataset,
                    table_name=schema,
                    symbol=symbols,
                    start=start,
                    end=end,
                )
                results[schema] = data

        return results

    def get_FRED_data(
        self,
        dataset: str,
        symbols: List[str] | str,
        start: str = None,
        end: str = None,
        download: bool = False,
        path: str = None,
        filetype: str = "csv",
    ):
        """
        Retrieve data from FRED and store it in the database.
        Parameters:
            dataset (str): The name of the dataset (should be "FRED").
            symbols (List[str] | str): Symbol(s) to retrieve data for.
            start (str, optional): Start date/time for the data range.
            end (str, optional): End date/time for the data range.
            download (bool, optional): Whether to download the data to a file. Defaults to False.
            path (str, optional): Path to save the downloaded data.
            filetype (str, optional): File format for downloaded data. Defaults to "csv".
        Returns:
            Dict: Retrieved data organized by symbol.
        Raises:
            ValueError: If the dataset is not "FRED" or if the symbol is not found in FRED.
        """

        symbols = symbols if isinstance(symbols, list) else [symbols]

        results = {}

        for symbol in symbols:
            print(f"Processing symbol {symbol}...")
            if not self._fred_client._validate_symbol(symbol):
                raise ValueError(f"Symbol {symbol} not found in FRED.")
            elif not self._database_client._check_table_in_database("FRED", symbol):
                data, col_dict = self._fred_client.get_data(symbol)
                self._database_client._create_table(
                    sql_schema="FRED",
                    table_name=symbol,
                    col_dict=col_dict,
                )
                self._database_client._insert_data(
                    sql_schema="FRED",
                    table_name=symbol,
                    data=data,
                )
            else:
                last_time = self._database_client._get_max_time(
                    sql_schema="FRED",
                    table_name=symbol,
                )
                data, col_dict = self._fred_client.get_data(
                    symbol,
                )
                if last_time is not None:
                    data = data[data["ts_event"] > last_time]

                if data.empty:
                    print(f"No new data for {symbol}.")
                else:
                    self._database_client._ensure_columns_exist(
                        sql_schema="FRED",
                        table_name=symbol,
                        col_dict=col_dict,
                    )
                    self._database_client._insert_data(
                        sql_schema="FRED",
                        table_name=symbol,
                        data=data,
                    )
                    print(f"Inserted {len(data)} rows for {symbol}.")

            results[symbol] = self._database_client._retrieve_data(
                sql_schema="FRED", table_name=symbol
            )
        if download:
            self._download_data(
                results_dict=results,
                path=path,
                filetype=filetype,
            )

        return results

    def get_ranges(self, dataset: str = None, schema: str = None, symbol: str = None):
        """
        Retrieve the ranges of data for a given dataset, schema, and symbol.
        Parameters:
            dataset (str, optional): The name of the dataset.
            schema (str, optional): The schema name.
            symbol (str, optional): The symbol to retrieve ranges for.
        Returns:
            Dict: A dictionary containing the ranges of data for the specified dataset, schema, and symbol.
        """
        unique_combos = self._database_client._retrieve_existing_ranges()
        unique_combos = unique_combos.to_dict(orient="records")
        result = {}
        for item in unique_combos:
            schema = item["schema"]
            table = item["table"]
            symbol = item["symbol"]
            result.setdefault(schema, {}).setdefault(table, {})[symbol] = []

        for schema, tables in result.items():
            for table, symbols in tables.items():
                for symbol in symbols.keys():
                    ranges = self._database_client.retrieve_ranges(
                        sql_schema=schema, table_name=table, symbol=symbol
                    )
                    if ranges:
                        result[schema][table][symbol] = self._merge_ranges(ranges)

        return result

    def insert(self, dataset: str, schema: str, symbol: str, data: pd.DataFrame):
        """
        Insert data into the database for a given dataset, schema, and symbol.
        Parameters:
            dataset (str): The name of the dataset.
            schema (str): The schema name.
            symbol (str): The symbol to insert data for.
            data (pd.DataFrame): The data to be inserted.
        """

        dataset = self._check_dataset(dataset)

        if dataset == "Databento":
            if not self._databento_client._validate_schema(dataset, schema):
                raise ValueError(f"Schema {schema} not found in Databento.")
            if not self._database_client._check_table_in_database(dataset, schema):
                self._database_client._create_table(
                    sql_schema=dataset,
                    table_name=schema,
                    col_dict=self._databento_client._get_col_dict(schema),
                )
            self._database_client._insert_data(
                sql_schema=dataset,
                table_name=schema,
                data=data,
            )
        elif dataset == "FRED":
            print("No need to insert FRED data. The API is free, just request it.")
        else:
            raise ValueError(f"Dataset {dataset} not found.")

    def _check_dataset(self, dataset: str) -> bool:
        """
        Check if the dataset exists in the database.
        """
        if not dataset:
            raise ValueError("Dataset cannot be empty.")
        if not isinstance(dataset, str):
            raise ValueError("Dataset must be a string.")

        if self._databento_client._validate_dataset(dataset):
            return "Databento"
        elif dataset == "FRED":
            return "FRED"
        else:
            print(f"Dataset {dataset} not found in either Databento or FRED.")
            return None

    def _download_data(
        self,
        results_dict: Dict[str, pd.DataFrame] | Dict[str, Dict[str, pd.DataFrame]],
        path: str,
        filetype: str,
    ) -> None:
        """
        Download the data to the specified path.
        """

        path = Path(path or ".")

        path.mkdir(parents=True, exist_ok=True)

        ext = filetype.lower()

        for key, value in results_dict.items():
            if isinstance(value, dict):
                for sub_key, sub_value in value.items():
                    file_path = (
                        path
                        / f"{key}_{sub_key}_{datetime.now().strftime('%Y%m%d_%H%M%S')}.{ext}"
                    )
                    self._download_helper(file_path, ext, sub_value)

            else:
                file_path = (
                    path / f"{key}_{datetime.now().strftime('%Y%m%d_%H%M%S')}.{ext}"
                )
                self._download_helper(file_path, ext, value)

    @staticmethod
    def _download_helper(file_path: str | Path, ext: str, data: pd.DataFrame) -> None:
        """
        Helper function to download data to a specified file path.
        """
        writer = getattr(data, f"to_{ext}", None)
        if writer is None:
            raise ValueError(f"Unsupported file type: {ext}")
        kwargs = {}
        if ext in ("csv", "xls", "xlsx", "html"):
            kwargs["index"] = False
        elif ext == "parquet":
            kwargs["compression"] = "gzip"
        elif ext == "json":
            kwargs["orient"] = "records"

        writer(file_path, **kwargs)
        print(f"Data downloaded to {file_path}")

    @staticmethod
    def _ask_yn(question: str) -> bool:
        """
        Ask a yes or no question and waits for an answer.
        """
        while True:
            answer = input(question).strip().lower()
            if answer in ("y", "yes"):
                return True
            elif answer in ("n", "no"):
                return False
            else:
                print("Please enter 'y' or 'n'.")
                continue

    @staticmethod
    def _merge_ranges(
        source_ranges: List[Tuple[datetime, datetime]],
    ) -> List[Tuple[str, str]]:
        """
        Merge the given ranges with the requested range.
        """
        if not source_ranges:
            return []

        # Sort by start date
        source_ranges.sort(key=lambda x: x[0])
        merged = [source_ranges[0]]

        for current_start, current_end in source_ranges[1:]:
            last_start, last_end = merged[-1]

            # Only merge if last_end == current_start
            if last_end == current_start:
                merged[-1] = (last_start, current_end)
            else:
                merged.append((current_start, current_end))

        return merged

    @staticmethod
    def _get_missing_ranges(
        source_ranges: List[Tuple[datetime, datetime]],
        requested_range: Tuple[datetime, datetime],
    ) -> List[Tuple[str, str]]:
        """
        Get the missing ranges from the given ranges.
        """
        req_start, req_end = requested_range
        if req_end is None:
            req_end = (
                datetime.now(timezone.utc)
                .replace(hour=0, minute=0, second=0, microsecond=0)
                .replace(tzinfo=None)
            )
        source_ranges = sorted(source_ranges, key=lambda x: x[0])

        missing_ranges = []

        current = req_start

        for start, end in source_ranges:
            if current < start:
                missing_ranges.append((current, start))
            current = max(current, end)
            if current >= req_end:
                break

        if current < req_end:
            missing_ranges.append((current, req_end))

        return missing_ranges
        `}
                    />
                </div>

            </div>
        </div>

        <Footer></Footer>
    </div>)
};

export default AceDB;