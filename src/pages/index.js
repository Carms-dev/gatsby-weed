import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import gif_7 from '../assets/gifs/007_body-as-landscape.gif';
import gif_2 from '../assets/gifs/002_conditioned-nature.gif';
import line_drawing from '../assets/gifs/line-drawing.gif';
import styled from 'styled-components';

import IntroSection from '../components/Intro';
import Footer from '../components/Footer';
import Overlay from '../components/Overlay';

import { initLineDrop, initImageZoom } from '../utils/effect';
import Modal, { initModalPositions } from '../components/Modal';

const FallingStyles = styled.div`
  @keyframes zoomin {
    from {
      transform: scale(1, 1);
    }
    to {
      transform: scale(1.2, 1.2);
    }
  }
  @keyframes zoomout {
    from {
      transform: scale(1.2, 1.2);
    }
    to {
      transform: scale(1, 1);
    }
  }
`;

export default function HomePage() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        filter: { absolutePath: { regex: "/landing_page/" } }
        sort: { fields: base }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxWidth: 2048, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  // Gatsby image
  const jpgs = data.allFile.edges;

  // initialize modal
  const modalIds = ['modal-germinator', 'modal-time', 'modal-third', 'modal-spirit'];
  const initialVisibility = {}
  modalIds.forEach(id => initialVisibility[id] = false);
  const [ isVisible, setVisibility ] = useState(initialVisibility);
  
  // Scroll effects
  useEffect(() => {
    const area = document.querySelector('#scrollArea');
    const pTags = area.querySelectorAll('p');
    const images = area.querySelectorAll('.animate-zoom img');
    initLineDrop(pTags);
    initImageZoom(images);
    initModalPositions();
  }, []);

  const toggleModal = (e) => {
    const modalId = e.target.dataset.modal;
    const updatedVisibility = Object.assign({}, isVisible)
    updatedVisibility[modalId] = !isVisible[modalId];
    setVisibility(updatedVisibility);
  }

  return (
    <Layout greenBg>
      <Modal id="modal-germinator" isVisible={isVisible} setVisibility={setVisibility}>
        <p>
          Plants opportunistically reclaim spaces. Thinking through this notion, plants become active survivors in urbanity—animate matter that thrives and adapts in artificial habitats.
        </p>
      </Modal>
      <Modal id="modal-time" isVisible={isVisible} setVisibility={setVisibility}>
        <p>
          In the artist book And Yet My Mask is Powerful, Basel Abbas and Ruanne Abou-Rahme try to trace back routes leading to the sites of destroyed Palestinian villages. They finally find their way by following the vegetation growing there: “wild fennel leads us to what remains of the village.” (2017)
        </p>
        <p>
          We learn to marvel in front of man-made edifices, towers, castles, homes. Yet, ultimately, they are bound to a slow dying process, slowly decaying, unless actively maintained, preserved, restored. We learn to value monuments made of stone, not only the building or the object in itself, but also as a proof of history. A history whose representation is fixed, frozen, singular, rather than constantly fluctuating and shifting, to be written and spoken from multiple points of entry. A first step towards decolonization, to move history into the plural form: histories.
        </p>
        <p>
          Going back to the wild fennel growing in the erased Palestinian villages, what remains after all marks of the constructions that once stood there are gone, is the resisting, persistant and persisting local vegetation. Nature remains the only testament of that history. It is our witness, there long before we came, and finding ways to remain long after we depart. Histories are carried through its flux, never finite, as it grows and dies and gets reborn again.
        </p>
      </Modal>
      <Modal id="modal-third" isVisible={isVisible} setVisibility={setVisibility}>
        <p>
          The term third landscape, conceived by French writer/gardener Gilles Clément (Manifeste du Tiers paysage, 2004), describes the abandoned lots of land within the urban environment. These spaces can be understood as the ‘spruits’ that meander through the city, the transitional spaces between one place and another, roadsides and road islands, neglected lots of land dotted around the city, disused mine dumps, railroad embankments, and planned buffer zones. It defines miniature gaps between the pavement and the wall, the gutter clogged with organic debris, mangled sidewalks exposing soil for opportunistic plants to grow. Clément considers these plants to be claiming and creating a third space within the city, a physical and metaphorical landscape that is the genetic petri dish for urban ecology. He calls this the third landscape. But if that is the third landscape, what is the first landscape?
        </p>
      </Modal>
      <Modal id="modal-spirit" isVisible={isVisible} setVisibility={setVisibility}>
        <p>
          British gardener and writer Richard Mabey recalls becoming enraptured with the abandoned plot of land nearby his work, where weeds were left to grow and proliferate at ease : “[...] this kind of post-industrial wasteland was actually producing this growth. It seemed to say something about the obstinacy and resilience of nature.” (Weeds: In Defense of Nature's Most Unloved Plants, 2011)
        </p>
      </Modal>
      <Helmet>
        <title>Home | What is a Weed?</title>
      </Helmet>
      <Nav />
      <img
        src={line_drawing}
        alt="Line drawing of weeds"
        className="absolute hidden md:block"
        style={{ maxWidth: '50%', top: '0', left: '-5vw' }}
      />
      <div
        className="pt-32 pl-6 md:pt-60 md:pl-12 md:-ml-half-width"
        style={{ maxWidth: '80vw', fontFamily: 'MonetaSans' }}
      >
        <p className="mb-4 italic">
          "What is a weed?
          <br />
          Oh, what is a weed?"
        </p>
        <p className="italic">
          - Julian Bannerman, Great Gardens: Trematon Castle, Nowness
        </p>
      </div>
      <section className="grid pt-8">
        <IntroSection />
      </section>
      <FallingStyles id="scrollArea">
        <section className="grid pt-8">
          <Link to="/amaranth" className="img-container max-w-3/4 mx-auto">
            <Img
              fluid={jpgs[0].node.childImageSharp.fluid}
              alt={jpgs[0].node.base.split('.')[0]}
              className="animate-zoom"
            />
            <Overlay />
          </Link>
        </section>
        {/* Intro Poem */}
        <section className="space-y-6 pt-12">
          <p className="">Is a weed</p>
          <p className="ml-24">
            A <span className="tracking-wider pl-2">displaced</span> plant
          </p>
          <p className="text-right sm:text-left sm:ml-96">
            a plant out of place
          </p>
          <p className="text-right sm:text-left sm:ml-80">In a not no place</p>
          <p className="ml-36">Is a weed</p>
          <p className="text-right sm:text-left sm:ml-60">
            A (vegetal) being holding <em>ground</em>
          </p>
        </section>

        <div className="w-11/12 mx-auto mt-12">
          {/* 0.1 Title Mobile */}
          <div className="text-rose md:hidden">
            <Link to="/index-concrete-plant">
              <h2 className="text-5xl md:text-7xl">0.1</h2>
              <h3 className="text-xl uppercase  tracking-wide  md:hidden">
                Concrete & Plant Relationships
              </h3>
            </Link>
          </div>
        </div>

        {/* 0.1 Title Desktop */}
        <div className="title hidden md:block whitespace-nowrap">
          <h3 className="title-width">Concrete & Plant Relationships</h3>
          <Link to="/index-concrete-plant">
            <h2 className="ml-24">0.1</h2>
            <div className="subtitle">
              <h3>Concrete & Plant Relationships</h3>
            </div>
          </Link>
        </div>

        {/* 0.1 Poem */}
        <section className="flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="my-12 space-y-2 col-span-1">
              <p className="my-12">
                <em>
                  Landing ground — to land on the ground — to come through{' '}
                </em>
              </p>
              <p className="">A weed is</p>
              <p className="ml-16">Is a weed</p>
              <p className="ml-32">Is a weed</p>
              <p className="ml-48">Is a weed</p>
            </div>
            <Link
              to="/concrete-plant"
              className="img-container self-end md:justify-self-center mx-4 max-w-1/2 md:max-w-3/10"
            >
              <Img
                fluid={jpgs[1].node.childImageSharp.fluid}
                alt={jpgs[1].node.base.split('.')[0]}
                className="animate-zoom"
              />
              <Overlay />
            </Link>
          </div>

          <div className="mt-12 space-y-2 md:align-right md:self-center">
            <p className="">Is a weed</p>
            <div className="sm:ml-16">
              <p>
                A plant negotiating concrete
                <span className="ml-2 tracking-wider">rup</span>
              </p>
              <p className="ml-60 pl-2 md:ml-72">
                <span className="tracking-wider">ture</span>
              </p>
              <p className="py-4 ml-64 sm:ml-72 md:ml-80 pl-12">s</p>
            </div>
            <div className="space-y-2 pb-12 leading-loose">
              <p className="text-right">
                Are weeds pushing their way out of every crack,
              </p>
              <p className="text-right">
                nature’s proof of her will to resist the human’s urge to control
                it?
              </p>
              <p className="pt-12 text-right">
                A reminder that every built environment must exist in
              </p>
              <p className="">
                negotiation — ideally in harmony — with its natural one.
              </p>
              <p className="pt-12">Is a weed then,</p>
              <p className="">
                A resistance to laboriously curated, easily manageable and
                predictable urban spaces
              </p>
            </div>
          </div>

          <div className="grid">
            <div className="my-12 space-y-2 self-center">
              <p className="">Weeds,</p>
              <p className="ml-12">Blurring seductively clear</p>
              <div className="space-y-2 pt-4 sm:ml-56 lg:ml-24 xl:mr-36">
                <div className="flex flex-row-reverse">
                  <div
                    className="img-container max-w-1/2 self-start overflow-hidden"
                    style={{ width: 'auto' }}
                  >
                    <Link to="/conditioned-nature">
                      <img src={gif_2} alt="" />
                      <Overlay />
                    </Link>
                  </div>
                  <div className="space-y-2 flex-grow">
                    <p className="">P</p>
                    <p className="ml-4">A</p>
                    <p className="ml-8">T</p>
                    <p className="ml-12">H</p>
                    <p className="ml-16">W</p>
                    <p className="ml-20">A</p>
                    <p className="ml-24">Y</p>
                    <p className="ml-28 hidden lg:inline">
                      S , roads, tidy delineations
                    </p>
                  </div>
                </div>
                <p className="ml-28 lg:hidden">S , roads, tidy delineations</p>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto">
          {/* 0.2 Title Mobile */}
          <div className="w-11/12 mx-auto text-rose md:hidden">
            <Link to="/index-conditioned-nature">
              <h2 className="text-5xl md:text-7xl">0.2</h2>
              <h3 className="md:text-4xl lg:text-xl uppercase tracking-wide md:hidden">
                Conditioned Nature
              </h3>
            </Link>
          </div>

          {/* 0.2 Title Desktop */}
          <div className="title hidden md:block whitespace-nowrap">
            <h3 className="title-width">Conditioned Nature</h3>
            <Link to="/index-conditioned-nature">
              <h2 className="ml-24">0.2</h2>
              <div className="subtitle">
                <h3>Conditioned Nature</h3>
              </div>
            </Link>
          </div>
        </div>

        {/* 0.2 Poem */}
        <section className="flex flex-col my-12 relative">
          <div className="space-y-2 pb-12 leading-loose">
            <p className="">Weeds,</p>
            <p className="ml-12">
              Show us how to be in the presence of discomfort, of{' '}
              <span className="pl-4 tracking-wider">disruptions</span>
            </p>
            <p className="pt-24 ml-12">Is a weed</p>
            <p className="ml-32">A pioneer</p>
            {/* Modal 1 */}
            <p className="underline text-right sm:text-left sm:ml-32 relative">
              <button
                data-modal="modal-germinator"
                onClick={toggleModal}
                className="underline text-right sm:text-left sm:ml-32 text-green"
              >
                An opportunistic germinator
              </button>
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="img-container">
              <a href="https://www.npr.org/2011/07/07/137550209/weeds-in-defense-of-botanys-cockroach" target="_blank" rel="noreferrer">
              <Img
                fluid={jpgs[2].node.childImageSharp.fluid}
                alt={jpgs[2].node.base.split('.')[0]}
                className="animate-zoom"
              />
              <Overlay />
              </a>
            </div>
            <div className="space-y-2 pb-0 leading-loose place-self-end text-right sm:text-left sm:place-self-center">
              <p className="">Is a weed</p>
              <p className="ml-16">What is yet to come</p>
              <p className="ml-28 pt-8">Is a weed</p>
              <p className="sm:ml-28">
                A history maker, a storyteller, a punctuator
              </p>
            </div>
            <div className="space-y-2">
              <p>Is a weed</p>
              <button
                data-modal="modal-time"
                onClick={toggleModal} 
                className="underline ml-20 text-green">
                A witness of TIME recording histories
              </button>
            </div>
          </div>
        </section>

        <div className="w-11/12 mx-auto">
          {/* 0.3 Title Mobile */}
          <div className="text-rose text-right md:hidden">
            <Link to="/index-plants-witness">
              <h2 className="text-5xl md:text-7xl">0.3</h2>
              <h3 className="text-xl uppercase tracking-wide md:hidden">
                Plants as Witnesses
              </h3>
            </Link>
          </div>
        </div>

        {/* 0.3 Title Desktop */}
        <div className="title hidden md:block float-right mb-12 text-right whitespace-nowrap">
          <h3 className="title-width">Plants as Witnesses</h3>
          <Link to="/index-plants-witness">
            <h2 className="mr-48">0.3</h2>
            <div className="subtitle">
              <h3 className="right">Plants as Witnesses</h3>
            </div>
          </Link>
        </div>

        {/* 0.3 Poem */}
        <section className="flex flex-col my-12 space-y-12">
          <div className="text-center space-y-2 mb-24">
            <p>
              Is a weed the thought in our minds that make us move more
              vigorously
            </p>
            <p>Is a weed the dance between the boundary and the threshold</p>
            <p>Is a weed the feeling in our bodies that agitates our skin</p>
            <p>Is a weed the song we sing when we settle to sleep</p>
          </div>
          <div className="img-container mx-auto max-w-3/4">
            <a href="https://www.nowness.com/series/great-gardens/trematon-castle-cornwall-julian-isabel-bannerman" target="_blank" rel="noreferrer">
            <Img
              fluid={jpgs[3].node.childImageSharp.fluid}
              alt={jpgs[3].node.base.split('.')[0]}
              className="animate-zoom"
            />
            <Overlay />
            </a>
          </div>
          <div className="grid lg:grid-cols-4 gap-6 py-12">
            <div className="space-y-2 self-center lg:col-span-2 lg:self-auto">
              <p className="">Is a weed</p>
              <p className="ml-16">To push beyond the edge,</p>
              <p className="ml-16">to keep to the margin,</p>
              <p className="ml-16">to straddle in between,</p>
              <p className="ml-16">to protrude more than others</p>
            </div>

            <div className="img-container max-w-2/5 lg:max-w-1/2 order-first ml-auto mr-12 lg:mx-auto lg:order-3">
              <div className="img-container">
              <a href="https://www.cca.qc.ca/en/articles/issues/19/the-planet-is-the-client/32771/the-third-landscape" target="_blank" rel="noreferrer">
              <Img
                fluid={jpgs[4].node.childImageSharp.fluid}
                alt={jpgs[4].node.base.split('.')[0]}
                className="animate-zoom"
              />
              <Overlay />
              </a>
              </div>
            </div>

            <div className="space-y-8 self-center text-right lg:text-left pt-12 lg:pt-32 lg:pb-12 order-4">
              <p className="mr-40 lg:mx-0">Is a weed</p>
              <p className="mr-16 pb-4 lg:ml-8 xl:ml-24 lg:mr-0 ">
                To take space
              </p>
              <p className="mr-48 lg:ml-8 xl:ml-24 lg:mr-0 ">To speak louder</p>
              <p className="mr-56 lg:ml-8 xl:ml-24 lg:mr-0 ">To live longer</p>
            </div>
          </div>
        </section>

        {/* 0.4 Poem */}
        {/* 0.4 Title Mobile */}
        <div className="mx-auto w-11/12 mb-12">
          <div className="text-right text-rose md:hidden">
            <Link to="/index-third-landscape">
              <h2 className="text-5xl md:text-7xl">0.4</h2>
              <h3 className="text-xl uppercase tracking-wide md:hidden">
                Third Landscape
              </h3>
            </Link>
          </div>
        </div>
        <div className="grid md:grid-cols-2">
          {/* 0.4 Stanza 1 */}
          <div className="mx-auto">
            <p className="pb-12 tracking-wide">A PLANT PROLIFERATING</p>
            <p className="ml-16">
              enabling <span className="pl-2 tracking-widest">etnlmns</span>
            </p>
            <p className="ml-40 pl-1 pt-4">
              <span className="tracking-widest">nageet</span>
            </p>
          </div>
          {/* 0.4 Title Desktop */}
          <div className="title hidden md:block justify-self-end text-right whitespace-nowrap">
            <h3 className="title-width">Third Landscape</h3>
            <Link to="/index-third-landscape">
              <h2 className="mr-48">0.4</h2>
              <div className="subtitle">
                <h3 className="right nowrap">Third Landscape</h3>
              </div>
            </Link>
          </div>
          {/* 0.4 Stanza 2 */}
          <div className="md:col-start-2 mx-auto py-32 space-y-6 md:space-y-2">
            <p className="md:ml-32 lg:ml-64 tracking-wide">
              STRANGLING the stuff of living
            </p>
            <p className="tracking-wide">REGENERATING the stuff of living</p>
          </div>
        </div>

        {/* 0.4 Stanza 3, 4, 5, modal, & image */}
        <section className="my-12 space-y-6">
          <div className="space-y-6 mx-auto">
            <p className="">Is a weed</p>
            <p className="ml-6 md:ml-16">
              A plant living in the urban human habitat
            </p>
            <p className="ml-24 md:pl-80">a landscape?</p>
            {/* MODAL 3 */}
            <p className="underline ml-36 md:pl-96">
              <button
                data-modal="modal-third"
                onClick={toggleModal}
                className="underline text-green"
              >
                A third landscape. 
              </button>
            </p>
          </div>
          <div className="grid md:grid-cols-2">
            <div className="img-container mr-0 ml-auto max-w-1/2 md:max-w-2/5 lg:max-w-1/4 lg:mr-auto">
              <Link to="/third-landscape">
                <Img
                  fluid={jpgs[5].node.childImageSharp.fluid}
                  alt={jpgs[5].node.base.split('.')[0]}
                  className="animate-zoom"
                />
                <Overlay />
              </Link>
            </div>
            <div className="space-y-6 md:order-first self-end md:self-center">
              <p className="">Is a weed</p>
              <p className="ml-20">Speaking</p>
              <p className="ml-40">for</p>
              <p className="ml-48">the soil</p>
            </div>
            <div className="space-y-4 lg:pb-12 lg:float-left">
              <p className="">
                The types of weed found growing in soil indicate its composition
              </p>
              <div className="ml-16 space-y-4 pt-12 float-right">
                <p className="">Moss and plantain love an acidic ground</p>
                <p className="">Chicory thrives in fertile soil</p>
                <p className="">Knotweed needs a heavy and compacted home</p>
                <p className="">Clover will cover a lawn lacking nitrogen</p>
              </div>
            </div>
          </div>
        </section>

        {/* 0.5 Title Mobile */}
        <div className="mx-auto">
          <div className="w-11/12 mx-auto mb-6 text-rose md:hidden">
            <Link to="/index-displace-migrate">
              <h2 className="text-5xl md:text-7xl">0.5</h2>
              <h3 className="md:text-4xl lg:text-xl uppercase tracking-wide md:hidden">
                Displacement / Migration
              </h3>
            </Link>
          </div>
        </div>

        {/* 0.5 Poem */}
        <div className="flex md:flex-row-reverse">
          <div
            className="img-container my-12 mr-6 md:mr-0 md:ml-12 max-w-1/2 self-start overflow-hidden"
            style={{ width: 'auto' }}
          >
            <Link to="/body-landscape">
              {/* insert gif for 007 */}
              <img src={gif_7} alt="Body Is/As Landscape" />
              <Overlay />
            </Link>
          </div>
          <div className="space-y-2 self-center">
            <p className="">Is a weed</p>
            <p className="">A way to navigate oneself</p>
            <div className="float-right">
              <p className="">through space,</p>
              <p className="">through a place,</p>
              <p className="">through no place</p>
            </div>
          </div>
          {/* 0.5 Title Desktop */}
          <div className="title hidden md:inline-block my-auto ml-0 mr-auto xl:whitespace-nowrap">
            <Link to="/index-displace-migrate">
              <h3 className="title-width">Displacement / Migration</h3>
              <h2 className="mx-40">0.5</h2>
              <div className="subtitle">
                <h3>Displacement / Migration</h3>
              </div>
            </Link>
          </div>
        </div>
        <section className="my-12 mx-auto max-w-3/4">
          <p className="pb-12">Is a weed</p>
          {/* MODAL 4 */}
          <p className="underline ml-28 pb-12">
            <button 
              data-modal="modal-spirit" 
              onClick={toggleModal}
              className="underline text-green"
            >
              The vegetal most akin to the human spirit
            </button>
          </p>
          <p className="pb-12">
            Weeds, testimonies of resilience and adaptability — their numerous
            seeds remaining dormant for many years, waiting for the right
            conditions to spring, spreading easily and rapidly in inhospitable
            locales —
          </p>
          <p className="pb-12">
            Showing us how to develop survival mechanisms to counter
          </p>
          <p className="">removal</p>
          <p className="ml-16">Disappearance</p>
        </section>

        {/* 0.6 Title Mobile */}
        <div className="mx-auto mb-12">
          <div className="w-11/12 mx-auto text-rose md:hidden">
            <Link to="/index-body-landscape">
              <h2 className="text-5xl md:text-7xl">0.6</h2>
              <h3 className="md:text-4xl lg:text-xl uppercase tracking-wide md:hidden">
                Body in / as Landscape
              </h3>
            </Link>
          </div>
        </div>

        {/* 0.6 Poem */}
        <div className="grid md:grid-cols-2">
          {/* 0.6 Title Desktop */}
          <div className="title hidden md:block">
            <h3 className="title-width">Body in / as Landscape</h3>
            <Link to="/index-body-landscape">
              <h2 className="float-right mr-24">0.6</h2>
              <div className="subtitle">
                <h3 className="">Body in / as Landscape</h3>
              </div>
            </Link>
          </div>
          {/* 0.6 Stanza 2 */}
          <div className="mb-6 mx-6">
            <p className="ml-16">Is a weed</p>
            <p className="ml-24 mb-8">a paragon</p>
            <p className="">For bodies made to feel out of place</p>
            <p className="">For displaced bodies</p>
            <p className="">For contested bodies</p>
            <p className="">
              For Indigenous bodies whose land rights are contested
            </p>
            <p className="">For migrant bodies denied resources</p>
          </div>
        </div>

        <section className="my-12 grid md:grid-cols-3 max-w-3/4">
          <div className="">
            <p className="md:ml-16 lg:mr-16 lg:text-right ">A weed</p>
          </div>
          <div className="col-span-2 my-4">
            <p className="text-center my-4 italic">
              Teaching the body how to become its own landscape
            </p>
            <div className="img-container lg:max-w-3/4">
              <Link to="/fuki">
                <Img
                  fluid={jpgs[6].node.childImageSharp.fluid}
                  alt={jpgs[6].node.base.split('.')[0]}
                  className="animate-zoom"
                />
                <Overlay />
              </Link>
            </div>
          </div>
          <div className="col-span-2 space-y-4">
            <p className="">Is a weed</p>
            <p className="ml-36">Resistance</p>
            <p className="">Is a weed</p>
            <p className="ml-36">Resisting definition</p>
          </div>
        </section>

        {/* 0.7 Title & Image */}
        <div className="grid grid-cols-2 mr-12 md:mr-24">
          {/* 0.7 Title Mobile */}
          <div className="ml-4 text-rose md:hidden">
            <Link to="/index-furthermore">
              <h2 className="text-5xl md:text-7xl">0.7</h2>
              <h3 className="md:text-4xl lg:text-xl uppercase tracking-wide md:hidden">
                Furthermore
              </h3>
            </Link>
          </div>
          {/* 0.7 Title Desktop */}
          <div className="title hidden md:block min-w-0">
            <h3 className="title-width">Furthermore</h3>
            <Link to="/index-furthermore">
              <h2 className="ml-24">0.7</h2>

              <div className="subtitle">
                <h3>Furthermore</h3>
              </div>
            </Link>
          </div>
          <div className="img-container mr-0 ml-auto max-w-2/5">
            <Link to="/roses">
              <Img
                fluid={jpgs[7].node.childImageSharp.fluid}
                alt={jpgs[7].node.base.split('.')[0]}
                className="animate-zoom"
              />
              <Overlay />
            </Link>
          </div>
        </div>
      </FallingStyles>

      {/* Footnotes */}
      <section>
        <ol className="space-y-2">
            <h6 className="my-4 text-xl tracking-wide">FOOTNOTES</h6>
            <li>
              1. Johnnie Shand Kydd,
              <a
                href="https://www.nowness.com/series/great-gardens/trematon-castle-cornwall-julian-isabel-bannerman"
                target="_blank"
                rel="noreferrer"
                className="text-green hover:underline"
                id="foot"
              >
                “Great Gardens: Trematon Castle”
              </a>
              , Nowness, 2016.
            </li>
            <li>
              2. Tim Richardson,
              <a
                href="https://www.nytimes.com/2016/09/23/t-magazine/design/isabel-julian-bannerman-garden-designer-cornwall-norman-castle.html"
                target="_blank"
                rel="noreferrer"
                className="text-green hover:underline"
                id="foot"
              >
                “A Garden Sanctuary of Medieval Magic”
              </a>
              , New York Times, September 23 2016.
            </li>
          </ol>
        </section>
      <Footer />
    </Layout>
  );
}
