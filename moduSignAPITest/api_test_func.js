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
    Authorization: 'Basic a21rMzAyNEBuYXZlci5jb206WmpNeFpEQTJObU10TURNNVlTMDBNREJrTFdJNE9XVXRNalJoWkdRelptWmtZMlV4'
  },
  body: JSON.stringify({
    document: {
      participantMappings: [
        {
          excluded: false,
          signingMethod: {type: 'EMAIL', value: 'posika93@gmail.com'},
          verification: {
            password: {},
            mobileIdentification: {name: '김민규', phoneNumber: '01029877849'},
            dCert: {}
          },
          attachmentRequests: [{excluded: false, dataLabel: '81c49298', required: true}],
          locale: 'ko',
          role: '매도자',
          signingDuration: 20160, // minutes
          requesterMessage: '서명해 주세요.',
          name: '김임대'
        },
        {
          excluded: false,
          signingMethod: {type: 'KAKAO', value: '01029877849'},
          verification: {
            password: {},
            mobileIdentification: {name: '김임차', phoneNumber: '01029877849'},
            dCert: {}
          },
          attachmentRequests: [{excluded: false, dataLabel: '27c1a3f4', required: true}],
          locale: 'ko',
          role: '매수자',
          name: '김임차',
          signingDuration: 180,
          requesterMessage: '서명해 주세요.'
        },
        {
          excluded: false,
          signingMethod: {type: 'EMAIL', value: 'kmk3024@naver.com'},
          verification: {
            password: {},
            mobileIdentification: {name: '집보라중개사', phoneNumber: '01029877849'},
            dCert: {}
          },
          attachmentRequests: [{excluded: true, dataLabel: '1b89ff7c', required: true}],
          locale: 'ko',
          role: '공인중개사',
          name: '집보라중개사',
          signingDuration: 180,
          requesterMessage: '서명 해 주세요.'
        }
      ],
      //requesterInputMappings: [{dataLabel: '기타사항', value: '기타사항입니다.'}],
      title: '부동산 매매계약서_0302'
    },
    templateId: '701316e0-9a16-11ec-8e71-9de0f0dfe7f9'
  })
};



