import React, { Component } from 'react';
// import Layout from './containers/Layout/Layout'
// import NatourHome from './containers/NatourHome/NatourHome'
// import Header from './components/UI/Header/Header';


// class iTunesAPI {
//   static url=`https://itunes.apple.com/search?term=`

//   static getAll=(name)=>{
//     fetch(`${iTunesAPI.url+name}`).then(
//       res=>res.json()
//     )
//   }
// }

const iTunesAPI = {
  getAll: (ARTIST_NAME) => (
    fetch(`https://itunes.apple.com/search?term=${ARTIST_NAME}&media=music&entity=album&attribute=artistTerm&limit=200`).then(
      res => res.json()
    )
  ),
}

const Spinner =(props)=>{
  return (
      <div className='loader'>Loading...</div>
  );
};


const Card = (props) => {
  const { imgURL, title } = props

  return (
    <div className="card">
      <img className="card__img" src={imgURL} alt="" />
      <div className="card__content">
        {title}
      </div>
    </div>
  )
}

const CardList = (props) => {
  const { list } = props;
  const resultList = list.map(album => <Card key={album.collectionId} imgURL={album.artworkUrl100 ? album.artworkUrl100 : `http://via.placeholder.com/100x100`} title={album.collectionName} />)
  return resultList;

}

class SearchResultSection extends React.Component {
  
  shouldComponentUpdate(nextProps,nextState){
    if(this.props.resultListInfo.results!==nextProps.resultListInfo.results||this.props.loading!==nextProps.loading){
      return true;
    }else{
      return false;
    }
  }

  componentWillUpdate(){
    console.log('sectionUpdate');
  }

  render() {
    const { results, resultCount, resultQuery} = this.props.resultListInfo;
    const info = results ? `${resultCount} results for "${resultQuery}"` : `Search Albums by ArtistName:`;
    const resultList = results ? <CardList list={results} /> : null;
    return (
      <section className='searchResult'>
        <div id='info' className='searchResult__info'>
          {this.props.loading?<Spinner/>:info}
        </div>
        <div className='flexGrid'>
          {resultList}
        </div>
      </section>
    )
  }
}


class SearchBar extends React.Component {
  render() {
    const { onChange, value, onSubmit } = this.props.searchConfig;
    const {onScrollTop} = this.props;
    return (
      <form onSubmit={(e) => {onSubmit(e, value); onScrollTop();}} className='search'>
        <input
          type='text'
          className='search__input'
          placeholder='Search...'
          onChange={(e) => onChange(e)}
          value={value}
          required
        />
        <button
          className='search__button'>
          <svg className='search__icon' version='1.1' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'>
            <path d='M17.545 15.467l-3.779-3.779c0.57-0.935 0.898-2.035 0.898-3.21 0-3.417-2.961-6.377-6.378-6.377s-6.186 2.769-6.186 6.186c0 3.416 2.961 6.377 6.377 6.377 1.137 0 2.2-0.309 3.115-0.844l3.799 3.801c0.372 0.371 0.975 0.371 1.346 0l0.943-0.943c0.371-0.371 0.236-0.84-0.135-1.211zM4.004 8.287c0-2.366 1.917-4.283 4.282-4.283s4.474 2.107 4.474 4.474c0 2.365-1.918 4.283-4.283 4.283s-4.473-2.109-4.473-4.474z'></path>
          </svg>
        </button>
      </form>
    )
  }
}


class Layout extends React.PureComponent {


  handlerScrollTop=()=>{
    console.log('top');
    this.scrollContent.scrollTop=0;
  }    

  render() {

    return (
      <div className='container'>
        <header className='container__header'>
          <SearchBar searchConfig={this.props.searchConfig} onScrollTop={this.handlerScrollTop}/>
        </header>

        <main className='container__content' ref={(main) => { this.scrollContent = main; }}>
          {this.props.children}
        </main>
      </div>
    )
  }
}




class App extends React.Component {
  state = {
    query: '',
    results: null,
    resultQuery: '',
    resultCount: 0,
    loading:false
  }


  handlerSubmitQuery = (e, query) => {
    e.preventDefault();
    this.setState({loading:true});
    iTunesAPI.getAll(query)
      .then(res => {
        const { results, resultCount } = res;
        this.setState({
          results,
          resultCount,
          resultQuery: query,
          loading:false
        })
        console.log(this.state);
      })
      .catch(err => {
        console.error(err);
      });
  }

  handlerUpdateQuery = (e) => {
    this.setState({
      query: e.target.value
    })
  }

  render() {
    const searchConfig = {
      value: this.state.query,
      onChange: this.handlerUpdateQuery,
      onSubmit: this.handlerSubmitQuery
    }

    const resultListInfo = {
      results: this.state.results,
      resultCount: this.state.resultCount,
      resultQuery: this.state.resultQuery
    }


    return (
      <Layout searchConfig={searchConfig}>
        <SearchResultSection resultListInfo={resultListInfo} loading={this.state.loading} />
      </Layout>
    )
  }
}

export default App;
