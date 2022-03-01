$(document).on("click", "#reqSignFromTemplate", function() {
    console.log("reqSignFromTemplate button clicked!");
    fetch(req_with_template_url, req_with_template_options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
});

const req_with_template_url = 'https://api.modusign.co.kr/documents/request-with-template';
const req_with_template_options = {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // to change to real api keys.
    Authorization: 'Basic MTIzMTIzOjEyMzEyMw=='
  },
  body: JSON.stringify({
    document: {
      participantMappings: [
        {
          excluded: false,
          signingMethod: {type: 'EMAIL', value: 'modu.kim@modusign.co.kr / 01012345678'},
          verification: {
            password: {value: '123123'},
            mobileIdentification: {name: '임대인 이름', phoneNumber: '임대인 전화번호'},
            dCert: {}
          },
          attachmentRequests: [{excluded: false, dataLabel: '신분증', required: true}],
          locale: 'ko',
          role: '임대인',
          signingDuration: 20160, // minutes
          requesterMessage: '서명해 주세요.',
          name: '김임대'
        },
        {
          excluded: false,
          signingMethod: {},
          verification: {
            password: {},
            mobileIdentification: {name: '김임차', phoneNumber: '김임차전화번호'},
            dCert: {}
          },
          attachmentRequests: [{excluded: false, dataLabel: '신분증', required: true}],
          locale: 'ko',
          role: '임차인',
          name: '김임차',
          signingDuration: 180,
          requesterMessage: '서명해 주세요.'
        },
        {
          excluded: false,
          signingMethod: {},
          verification: {
            password: {},
            mobileIdentification: {name: '집보라중개사', phoneNumber: '123123123'},
            dCert: {}
          },
          attachmentRequests: [{excluded: true, dataLabel: '신분증', required: true}],
          locale: 'ko',
          role: '공인중개사',
          name: '집보라중개사',
          signingDuration: 180,
          requesterMessage: '서명 해 주세요.'
        }
      ],
      requesterInputMappings: [{dataLabel: '기타'}, {}],
      title: '부동산 매매계약서'
    },
    templateId: 'have to fill!!'
  })
};

