export function CharacterCard({ personagem, selecionado, onSelect }) {
  const isSelected = selecionado?.id === personagem.id;

  return (
    <li 
      onClick={() => onSelect(personagem)}
      className={`character ${isSelected ? 'selected' : ''}`}
      style={{ '--cor-tema': personagem.corTema }}
    >
      const iconeTamanhoReduzido = personagem.icone;
      <img src={iconeTamanhoReduzido} alt={personagem.nome} style={{ width: '80px' }} />
      <p>{personagem.nome}</p>
    </li>
  );
}