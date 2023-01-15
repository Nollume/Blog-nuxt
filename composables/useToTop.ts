const useToTop = () : { goToTop: (n : number) => void } => {
  const goToTop = (offset : number) : void => { window.scrollTo({ top: offset, behavior: 'smooth' }) }
  return { goToTop }
}

export default useToTop
