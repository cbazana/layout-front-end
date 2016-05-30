/* Valida campos do Formulário */
function openModal(){
	$(".modal").fadeIn("fast"),
	$(".modal-form").fadeIn("fast")}function closeModal(){$(".modal").fadeOut("fast"),
	$(".modal-compra").fadeOut("fast"),
	$(".modal-form input").val(""),
	$(".modal-form label.error").hide()}
	$("#register-form").submit(function(e){e.preventDefault()}),
	$("#register-form").validate({
		rules:{
			nomeCompleto:{required:!0,},
			dataNascimento:{required:!0,},
			cpf:{required:!0,},
			ddd:{required:!0,},
			telContato:{required:!0,},
			email:{required:!0,email:!0},
			nomecompletoMae:{required:!0,}
		},

		messages:{
			nomeCompleto:{
				required:"Por favor digite o nome completo.",	
			},

			dataNascimento:{
				required:"Informe a data",
			},

			cpf:{
				required:"Digite seu CPF",
			},

			ddd:{
				required:"Digite o DDD",
			},

			telContato:{
				required:"Digite o telefone.",
			},

			email:{
				required:"Por favor, digite seu e-mail",
			},

			nomecompletoMae:{
				required:"Por favor, digite o nome da mãe",
			}
		}
	}),

/* Corrige Modal */

	$(".close").on("click",function(e){
		e.preventDefault(),closeModal()
	}),

/* Seleciona Plano e carrega alguns dados */
	$(".selecionaPlano").on("click",function(e){openModal();
		var t=$(this).parents(".plano").attr("data-franquia"),
		n=$(this).parents(".plano").attr("data-preco");

		$(".planoSelecionado").attr("data-preco",n),
		$(".planoSelecionado").attr("data-franquia",t),
		$(".planoSelecionado .plano-ativo").text("Celular Direto Controle "+t),
		e.preventDefault()}),
		$(document.body).on({click:function(e){
			var t=$(".modal-compra"),
			n=$(this).parents(".modal-form"),
			a=n.find(".planoSelecionado").attr("data-franquia"),
			o=n.find(".planoSelecionado").attr("data-preco"),
			i=!0,
			d=n.find("input"),
			r=n.find("form #nomeCompleto").val(),
			l=n.find("form #cpf").val(),
			m=n.find("form #ddd").val(),
			f=n.find("form #telContato").val();

			$(d).each(function(){
				""==$(this).val()&&(i=!1)
			}),
			1==i&&(n.fadeOut("fast"),
			t.fadeIn("fast"),
			t.find(".planoSelecionado").text(a),
			t.find("#dddUsuario").text(m),
			t.find("#contatoUsuario").text(f),
			t.find("#nomeUsuario").text(r),
			t.find(".planoSelecionado").text(a),
			t.find("#cpfUsuario").text(l),
			t.find(".plano-preco").text(""+o+" /mês")
		)}
	},"#enviarForm"),
	$(".ok").on("click",function(e){
		e.preventDefault(),closeModal()
	});





