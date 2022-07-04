import { FormControl, FormGroup } from "@angular/forms";


export class FormValidations {

  // validar qualquer campo do formulario(AQUI É DE EMAIL)
  static equalsTo(outroCampo: string) {
    // Usado validator por conta de não ter um validator no parametro
    const validator = (formControl: FormControl) => {
      if (outroCampo == null) {
        throw new Error('É necessario informar um campo! ');
      }
      // esta verificando se o formulario ja foi renderizado
      // é para validar quando o controle estiver recebendo
      if (!formControl.root || !(<FormGroup>formControl.root).controls) {
        return null;
      }

      // propriedade root pega a propriedade raiz parent pega o aninhamento
      const field = (<FormGroup>formControl.root).get(outroCampo);
      if (!field) {
        throw new Error('É necessario informar um campo válido!');
      }
      // se for diferente do formcontro vai retorna invalido
      if (field.value !== formControl.value) {
        return { equalsTo: outroCampo };
      }
      // se campo for igual retorna nulo
      return null;
    };
    return validator;
  }

  // MENSAGEM DE ERRO
  static getErrorMsg(fieldName: string, validatorName:string, validatorValue?:any){
    const config: { [id: string] : string } = {
      'required':`${fieldName} é obrigatório.`,
      'minlength': `${fieldName} precisa ter no minimo ${validatorValue.requiredLength} caracter`,
      'maxlength': `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracter`,

    }
    return config[validatorName];
  }









}
