// import * as S from './styles';
// import { Link, useParams } from 'react-router-dom';
// import { SingleCountry } from '../../components/SingleCountry/SingleCountry';
// import { useEffect, useState } from 'react';
// import { CountryTypeScript } from '../../types/Country';
// import { useApi } from '../../context/ContextApi';
// import { useForm } from '../../context/ThemeContext';

// export const CountryPage = () => {
//   const { state } = useForm();
//   const { name } = useParams();
//   const countries = useApi();

//   const [loading, setLoading] = useState(false);
//   const [country, setCountry] = useState<CountryTypeScript[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       if (name) {
//         await getCountry(name);
//       }
//     };

//     fetchData().catch((error) => {
//       console.error('Error fetching data:', error);
//       setCountry([]);
//       setLoading(false);
//     });
//   }, [name]);

//   const getCountry = async (param: string) => {
//     setLoading(true);
//     try {
//       let country = countries && countries.find((item: CountryTypeScript) => item.name === param);
//       setCountry(country ? [country] : []);
//     } catch (error) {
//       console.error('Error fetching country:', error);
//       setCountry([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <S.CountryPage theme={state.theme}>
//       <div className='container'>
//         <Link to="/" className='back--button'><i className="fas fa-long-arrow-alt-left"></i> Back</Link>
//         {loading && <div className='loading'>Loading...</div>}
//         {!loading &&
//           country.map((item) => (
//             <SingleCountry
//               key={item.name}
//               flag={item.flags.png}
//               name={item.name}
//               nativeName={item.nativeName}
//               topLevelDomain={item.topLevelDomain[0]}
//               population={item.population}
//               currencies={item.currencies && item.currencies}
//               region={item.region}
//               languages={item.languages}
//               subregion={item.subregion}
//               capital={item.capital}
//               borders={item.borders}
//             />
//           ))
//         }
//       </div>
//     </S.CountryPage>
//   );
// };

// import * as S from './styles';
// import { Link, useParams } from 'react-router-dom';
// import { SingleCountry } from '../../components/SingleCountry/SingleCountry';
// import { useEffect, useState } from 'react';
// import { CountryTypeScript } from '../../types/Country';
// import { useApi } from '../../context/ContextApi';
// import { useForm } from '../../context/ThemeContext';
// import { FaLongArrowAltLeft } from "react-icons/fa";

// export const CountryPage = () => {
//   const { state } = useForm();
//   const { name } = useParams();
//   const countries = useApi();

//   const [loading, setLoading] = useState(false);
//   const [country, setCountry] = useState<CountryTypeScript[]>([]);

//   useEffect(() => {
//     if (name) {
//       getCountry(name);
//     }
//   }, [name]);

//   const getCountry = (param: string) => {
//     setLoading(true);
//     try {
//       const country = countries && countries.find((item: CountryTypeScript) => item.name === param);
//       setCountry(country ? [country] : []);
//     } catch (error) {
//       console.error('Error fetching country:', error);
//       setCountry([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <S.CountryPage theme={state.theme}>
//       <div className='container'>
//         <Link to="/" className='back--button'><i className="FaLongArrowAltLeft"><FaLongArrowAltLeft /></i> Back</Link>
//         {loading && <div className='loading'>Loading...</div>}
//         {!loading &&
//           country.map((item) => (
//             <SingleCountry
//               key={item.name}
//               flag={item.flags.png}
//               name={item.name}
//               nativeName={item.nativeName}
//               topLevelDomain={item.topLevelDomain[0]}
//               population={item.population}
//               currencies={item.currencies && item.currencies}
//               region={item.region}
//               languages={item.languages}
//               subregion={item.subregion}
//               capital={item.capital}
//               borders={item.borders}
//             />
//           ))
//         }
//       </div>
//     </S.CountryPage>
//   );
// };

import * as S from './styles';
import { Link, useParams } from 'react-router-dom';
import { SingleCountry } from '../../components/SingleCountry/SingleCountry';
import { useEffect, useState } from 'react';
import { CountryTypeScript } from '../../types/Country';
import { useApi } from '../../context/ContextApi';
import { useForm } from '../../context/ThemeContext';
import { FaLongArrowAltLeft } from "react-icons/fa";

export const CountryPage = () => {
  const { state } = useForm();
  const { name } = useParams();
  const countries = useApi();

  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState<CountryTypeScript[]>([]);

  useEffect(() => {
    if (name) {
      getCountry(name);
    }
  }, [name]);

  const getCountry = (param: string) => {
    setLoading(true);
    try {
      const country = countries && countries.find((item: CountryTypeScript) => item.name === param);
      setCountry(country ? [country] : []);
    } catch (error) {
      console.error('Error fetching country:', error);
      setCountry([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.CountryPage theme={state.theme}>
      <div className='container'>
        <Link to="/" className='back--button' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <FaLongArrowAltLeft /> Back
        </Link>
        {loading && <div className='loading'>Loading...</div>}
        {!loading &&
          country.map((item) => (
            <SingleCountry
              key={item.name}
              flag={item.flags.png}
              name={item.name}
              nativeName={item.nativeName}
              topLevelDomain={item.topLevelDomain[0]}
              population={item.population}
              currencies={item.currencies && item.currencies}
              region={item.region}
              languages={item.languages}
              subregion={item.subregion}
              capital={item.capital}
              borders={item.borders}
            />
          ))}
      </div>
    </S.CountryPage>
  );
};

